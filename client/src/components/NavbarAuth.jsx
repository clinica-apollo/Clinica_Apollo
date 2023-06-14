import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../utils/http";

export function NavbarAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async function () {
      const { user } = await request("/whoami");

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
