import { Link } from "react-router-dom";
import Logo from "../assets/logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
  return (
    <>
    <div></div>
        <footer>
       <script src="https://kit.fontawesome.com/4f82f23ccb.js" crossorigin="anonymous"></script>
      <div className="footer-row">
        <div className="footer-col">
          <img src={Logo} alt="logo" className="footer-logo" />
          <p>
            Suntem dedicați să oferim servicii medicale de calitate superioară și îngrijire de
            încredere pacienților noștri. Echipa noastră de profesioniști medicali calificați și
            personalul dedicat se străduiesc să asigure o experiență sigură, empatică și eficientă
            pentru toți cei care ne trec pragul.
          </p>
        </div>
        <div className="footer-col">
          <h3>Contact</h3>
          <p>Strada</p>
          <p>Orasul, Tara</p>
          <p>Codul postal</p>
          <p className="email-id">abc@email.com</p>
          <h4>+40 72xyzxyz</h4>
        </div>
        <div className="footer-col">
          <h3>Links</h3>
          <ul>
            <li>
            <Link to="/"></Link>
            </li>
            <li>
            <Link to="/desprenoi">Despre noi</Link>
            </li>
            <li>
            <Link to="/voluntariat">Voluntariat</Link>
            </li>
            <li>
            <Link to="/doneaza">Doneaza</Link>
            </li>
            <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Newsletter</h3>
          <form>
          <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="Introduceti adresa de email" required />
            <button type="submit">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
          </form>
          {/* <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div> */}
        </div>
      </div>
    </footer>
    </> 
  );
}
