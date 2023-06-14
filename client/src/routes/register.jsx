import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function Register() {
  return (
    <><section className="sub-header">
    <Navbar />
    <h1>Register</h1>
  </section><div className="log-cont">
    <script src="https://kit.fontawesome.com/4f82f23ccb.js" crossOrigin="anonymous"></script>
      <div className="form-box">
        <h1 id="title">Sign Up</h1>
        <form>
          <div className="input-group">
            <div className="input-field" id="nameField">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="First name" />
            </div>
            <div className="input-field" id="nameField">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Last name" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Confirm password" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="checkbox" placeholder="Terms&conditions" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="checkbox" placeholder="Newsletter" />
            </div>
            <div className="btn-field">
              <button type="button" id="signupBtn">
                Sign Up
              </button>
            </div>
            <Link to="/login">Already have an account?</Link>
          </div>
        </form>
      </div>
    </div></>
  );
};


