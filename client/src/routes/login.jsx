import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function Login() {
  const handleClickSignIn = () => {
    const nameField = document.getElementById('nameField');
    const title = document.getElementById('title');
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign in';
    document.getElementById('signupBtn').classList.add('disable');
    document.getElementById('signinBtn').classList.remove('disable');
  };

  const handleClickSignUp = () => {
    const nameField = document.getElementById('nameField');
    const title = document.getElementById('title');
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sign up';
    document.getElementById('signupBtn').classList.remove('disable');
    document.getElementById('signinBtn').classList.add('disable');
  };

  return (
    <div className="log-cont">
    <script src="https://kit.fontawesome.com/4f82f23ccb.js" crossOrigin="anonymous"></script>
      <div className="form-box">
        <h1 id="title">Sign Up</h1>
        <form>
          <div className="input-group">
            <div className="input-field" id="nameField">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="btn-field">
              <button type="button" id="signupBtn" onClick={handleClickSignUp}>
                Sign up
              </button>
              <button
                type="button"
                id="signinBtn"
                className="disable"
                onClick={handleClickSignIn}
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};


