import { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useUser } from "../hooks/useUser";
import { request } from "../utils/http";
import { useNavigate } from "react-router-dom";

export function Doneaza() {
  const navigate = useNavigate();

  const [user, setUser] = useUser();
  const [amount, setAmount] = useState(0);

  async function onSubmit(event) {
    event.preventDefault();

    await request(`/donations`, {
      method: `POST`,
      body: JSON.stringify({
        userId: user.id,
        amount,
      }),
    });

    navigate(`/multumim-pentru-donatie`);
  }

  return (
    <>
      <section className="sub-header">
        <Navbar />
        <h1>Donează</h1>
      </section>
      <div className="log-cont">
        <script
          src="https://kit.fontawesome.com/4f82f23ccb.js"
          crossOrigin="anonymous"
        ></script>
        <div className="form-box">
          <h1 id="title">Donează</h1>
          <form onSubmit={onSubmit}>
            <div className="input-group">
              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="number"
                  placeholder="Suma"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                />
                <label htmlFor="amount" style={{ paddingRight: "2em" }}>
                  lei
                </label>
              </div>
              <div className="btn-field">
                <button type="submit" id="signinBtn">
                  Donează
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
