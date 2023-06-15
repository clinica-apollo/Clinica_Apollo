import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { request } from "../utils/http";

export function Donatii() {
  const [donationsTotal, setDonationsTotal] = useState(0);

  useEffect(() => {
    (async function () {
      const query = `
        query {
          donationsTotal
        }
      `;

      const {
        data: { donationsTotal },
      } = await request("/graphql", {
        method: `POST`,
        body: JSON.stringify({ query }),
      });

      setDonationsTotal(donationsTotal);
    })();
  }, []);

  return (
    <>
      <section className="sub-header">
        <Navbar />
        <h1>Donează</h1>
      </section>
      <section className="about">
        <div className="main">
          <img src="https://media.istockphoto.com/id/888343166/photo/make-this-world-a-brighter-place.jpg?s=612x612&w=0&k=20&c=6MQkcSUhlqeNby6OhsrUhMh0Z-dUB3OUc3JDk9NwB0A=" />
          <div className="all-text">
            <div style={{
              display: "flex",
              alignItems: "center",
            }}>
            <h4>Fă o donație!</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "bold",
                marginLeft: "1em",
                padding: "0.5em",
              }}
            >
              Donatii totale: {donationsTotal}
            </div>
            </div>
            <h1>Acum poți face o diferență în viețile pacienților noștri!</h1>
            <p>
              Fiecare donație contează! Indiferent de mărimea sau frecvența
              contribuțiilor tale, vei face o contribuție valoroasă în lupta
              împotriva bolilor și în îmbunătățirea vieților celor aflați în
              suferință.
            </p>
            <div className="btn-txt">
              <Link to="/doneaza">
                <button type="button">Donează</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
