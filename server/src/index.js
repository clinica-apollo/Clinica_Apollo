const express = require(`express`);
const cors = require(`cors`);

// const auth = require(`./routes/auth`);

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(`/`, (req, res) => {
  res.send(`Hello world!`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
