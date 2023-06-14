import { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { request } from "../utils/http";

export function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  async function onSubmit(event) {
    event.preventDefault();

    const { token } = await request(`/register`, {
      method: `POST`,
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
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
        <h1>Register</h1>
      </section>
      <div className="log-cont">
        <script
          src="https://kit.fontawesome.com/4f82f23ccb.js"
          crossOrigin="anonymous"
        ></script>
        <div className="form-box">
          <h1 id="title">Sign Up</h1>
          <form onSubmit={onSubmit}>
            <div className="input-group">
              <div className="input-field" id="nameField">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </div>
              <div className="input-field" id="nameField">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
              </div>
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
              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="checkbox"
                  placeholder="Terms&conditions"
                  required
                />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input type="checkbox" placeholder="Newsletter" />
              </div>
              <div className="btn-field">
                <button type="submit" id="signupBtn">
                  Sign Up
                </button>
              </div>
              <Link to="/login">Already have an account?</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
