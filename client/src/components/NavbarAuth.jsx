import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../utils/http";

export function NavbarAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const lastUser = localStorage.getItem(user);
    if (lastUser) {
      setUser(JSON.parse(lastUser));
    }

    (async function () {
      const { user } = await request("/whoami");

      localStorage.setItem("user", JSON.stringify(user));

      setUser(user);
    })();
  }, []);

  return user !== null ? (
    <div>{user.first_name}</div>
  ) : (
    <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </>
  );
}
