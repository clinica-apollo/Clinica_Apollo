import { Link } from "react-router-dom";
import Logo2 from "../assets/logo2.png";
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
        <Link className="logo" to="/">
          <img src={Logo2} alt="logo" />
        </Link>
        <div className="nav-links" id="navLinks">
          <i className="fa fa-times" onClick={hideMenu}></i>
          <ul>
            <li>
              <Link to="/">ACASĂ</Link>
            </li>
            <li>
              <Link to="/despre-noi">DESPRE NOI</Link>
            </li>
            <li>
              <Link to="/voluntariat">VOLUNTARIAT</Link>
            </li>
            <li>
              <Link to="/doneaza">DONEAZĂ</Link>
            </li>
            <NavbarAuth />
          </ul>
          
        </div>
        <i className="fa fa-bars" onClick={showMenu}></i>
      
      </nav>
    </>
  );
}
