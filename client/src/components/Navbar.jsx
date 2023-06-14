import { Link } from "react-router-dom";
import { NavbarAuth } from "./NavbarAuth";

export function Navbar() {
  function showMenu() {
    document.getElementById("navLinks").style.right = "0";
  }

  function hideMenu() {
    document.getElementById("navLinks").style.right = "-200px";
  }

  return (
    <>
      <nav>
        <a href="index.html">
          <img src="" alt="logo" />
        </a>
        <div className="nav-links" id="navLinks">
          <i className="fa fa-times" onClick={hideMenu}></i>
          <ul>
            <li>
              <Link to="/">ACASA</Link>
            </li>
            <li>
              <Link to="/despre-noi">DESPRE NOI</Link>
            </li>
            <li>
              <Link to="/servicii">SERVICII</Link>
            </li>
            <li>
              <Link to="/voluntariat">VOLUNTARIAT</Link>
            </li>
            <li>
              <Link to="/doneaza">DONEAZA</Link>
            </li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={showMenu}></i>
        <NavbarAuth />
      </nav>
    </>
  );
}
