import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useUser } from "../hooks/useUser";
import { useEffect, useState } from "react";
import { request } from "../utils/http";

export function Account() {
  const navigate = useNavigate();

  const [user, setUser] = useUser();
  const [donations, setDonations] = useState([]);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate(`/`);
  }

  useEffect(() => {
    (async function () {
      const donations = await request(`/users/${user.id}/donations`);

      setDonations(donations);
    })();
  }, []);

  return (
    <>
      <section className="sub-header">
        <Navbar />
        <h1>Account</h1>
      </section>
      <div className="log-cont">
        <div className="form-box">
          <h1 id="title">Account</h1>

          <h4 style={{ marginTop: "3em", marginBottom: "2em" }}>
            {user.first_name} {user.last_name}
            <br />
            {user.email}
          </h4>

          <h3>Donatii:</h3>
          <table>
            <tr>
              <th>Suma</th>
              <th>Data</th>
            </tr>
            {donations.map((donation) => (
              <tr>
                <td>{donation.amount} lei</td>
                <td>{new Date(Number(donation.createdAt)).toLocaleString()}</td>
              </tr>
            ))}
          </table>

          <div className="btn-txt" style={{ marginLeft: "1.2em" }}>
            <button type="button" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
