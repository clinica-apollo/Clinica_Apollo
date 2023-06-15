import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
export function Analize() {
  return (
    <>
       <section className="sub-header">
        <Navbar />
        <h1>Analize</h1>
      </section>
      <section className="about">
      <div className="main">
      <img src="https://img.freepik.com/free-photo/coronavirus-blood-samples-assortment-lab_23-2149107255.jpg"/>
        <div className="all-text">
          <h4>Servicii de Analize Medicale Avansate</h4>
          <h1>Precizie și încredere în diagnosticul dvs. medical</h1>
          <p>La spitalul nostru, ne străduim să oferim pacienților noștri servicii de diagnosticare precisă, folosind tehnologii de ultimă generație și metode de analiză avansate.</p>
          <div className="btn-txt">
            <Link to="/doneaza">
              <button type="button">Fa o donatie!</button>
            </Link>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </>
  );
}