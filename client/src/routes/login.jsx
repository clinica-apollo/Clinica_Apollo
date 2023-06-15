import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { request } from "../utils/http";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  async function onSubmit(event) {
    event.preventDefault();

    const { token } = await request(`/login`, {
      method: `POST`,
      body: JSON.stringify({
        email,
        password,
      }),
      auth: false,
    });

    localStorage.setItem(`token`, token);

    navigate(`/`);
  }

  return (
    <>
      <section className="sub-header">
        <Navbar />
        <h1>Login</h1>
      </section>
      <div className="log-cont">
        <script
          src="https://kit.fontawesome.com/4f82f23ccb.js"
          crossOrigin="anonymous"
        ></script>
        <div className="form-box">
          <h1 id="title">Sign In</h1>
          <form onSubmit={onSubmit}>
            <div className="input-group">
              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
              <div className="btn-field">
                <button type="submit" id="signinBtn">
                  Sign In
                </button>
              </div>
              <Link to="/reset-password">
                Forgot your password?
                <br />
              </Link>
              <Link to="/register">Don't have an account?</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
