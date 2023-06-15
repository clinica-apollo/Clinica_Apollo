import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../utils/http";
import { useUser } from "../hooks/useUser";

export function NavbarAuth() {
  const [user, setUser] = useUser();

  useEffect(() => {
    (async function () {
      const { user } = await request("/whoami");

      setUser(user);
    })();
  }, []);

  return user ? (
    <li><Link to="/account">{user.first_name}</Link></li>

  ) : (
    <>


        <li><Link to="/login">LOGIN</Link></li>
        <li><Link to="/register">REGISTER</Link></li>


    </>
  );
}
