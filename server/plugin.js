/// <reference path="./global.d.ts" />

const bcrypt = require("bcrypt");
const { randomUUID } = require("crypto");

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
  const { db, sql } = app.platformatic;

  app.get(`/whoami`, async (req, res) => {
    // @ts-expect-error
    await req.setupDBAuthorizationUser();

    if (!req.user) {
      return res.send({ user: null });
    }

    const userId = req.user[`X-PLATFORMATIC-USER-ID`];

    const [user] = await db.query(sql`
      SELECT id, email, first_name, last_name FROM users WHERE id = ${userId}
    `);

    return res.send({ user });
  });

  app.post(`/register`, async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    const userId = randomUUID();
    const passwordHash = await hashPassword(password);

    try {
      await db.query(sql`
        INSERT INTO users (id, email, password_hash, first_name, last_name) VALUES (${userId}, ${email}, ${passwordHash}, ${firstName}, ${lastName})
      `);
    } catch (error) {
      if (
        error.code === `SQLITE_CONSTRAINT` &&
        error.message.includes(`UNIQUE`)
      ) {
        return res.status(409).send({ message: "Email already in use" });
      }

      throw error;
    }

    const token = generateToken(app, userId);

    return res.send({ token });
  });

  app.post(`/login`, async (req, res) => {
    const { email, password } = req.body;

    const [user] = await db.query(sql`
      SELECT id, password_hash FROM users WHERE email = ${email}
    `);

    if (typeof user === `undefined`) {
      return res.status(401).send({ message: "Email has no associated user" });
    }

    const isPasswordValid = await validatePassword(
      password,
      user.password_hash
    );

    if (!isPasswordValid) {
      return res.status(401).send({ message: "Incorrect password" });
    }

    const token = generateToken(app, user.id);

    return res.send({ token });
  });
};

function generateToken(app, userId) {
  return app.jwt.sign(
    {
      "X-PLATFORMATIC-ROLE": `user`,
      "X-PLATFORMATIC-USER-ID": userId,
    },
    {
      expiresIn: "1w",
    }
  );
}

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function validatePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}
