import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
export function Login() {
    return (
        <>
        <section>
        <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="First Name" />
        </div>
        <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Last Name" />
        </div>
        <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Email" />
        </div>
        </section>
        </>
    );
}