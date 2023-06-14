import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function Login() {
  return (
    <><section className="sub-header">
    <Navbar />
    <h1>Login</h1>
  </section><div className="log-cont">
    <script src="https://kit.fontawesome.com/4f82f23ccb.js" crossOrigin="anonymous"></script>
      <div className="form-box">
        <h1 id="title">Sign In</h1>
        <form>
          <div className="input-group">
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="btn-field">
              <button type="button" id="signinBtn">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div></>
  );
};


