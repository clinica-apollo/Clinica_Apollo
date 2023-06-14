import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function ResetPassword() {
  return (
    <><section className="sub-header">
    <Navbar />
    <h1>Reset Password</h1>
  </section><div className="log-cont">
    <script src="https://kit.fontawesome.com/4f82f23ccb.js" crossOrigin="anonymous"></script>
      <div className="form-box">
        <h1 id="title">Reset Password</h1>
        <form>
          <div className="input-group">
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="btn-field">
              <button type="button" id="signinBtn">
                Send email
              </button>
            </div>
          </div>
        </form>
      </div>
    </div></>
  );
};


