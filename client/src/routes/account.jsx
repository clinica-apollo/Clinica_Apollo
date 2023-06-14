import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function Account() {
    return (
        <>
        <section className="sub-header">
        <Navbar />
        <h1>Account</h1>
        </section>
        <section>
        <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="text" placeholder="First Name" />
        </div>
        <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="text" placeholder="Last Name" />
        </div>
        <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="email" placeholder="Email" />
        </div>
        </section>
        </>
    );
}