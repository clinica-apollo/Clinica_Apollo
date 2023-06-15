import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";

export function Programari() {
  return (
    <>
       <section className="sub-header">
        <Navbar />
        <h1>Consultatii</h1>
      </section>
      <section className="about">
      <div className="main">
      <img src="https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=DWZGM8lBb5Bun7cbxhKT1ruVxRC_itvFzA9jxgoA0N8="/>
        <div className="all-text">
          <h4>Servicii de Consultații Specializate</h4>
          <h1>Experiență medicală de încredere pentru nevoile dvs. individuale</h1>
          <p>Punem la dispoziția pacienților noștri o echipă de medici și specialiști dedicați, pregătiți să ofere servicii medicale de cea mai înaltă calitate. </p>
          <div className="btn-txt">
            <Link to="/analize">
              <button type="button">Analize</button>
            </Link>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </>
  );
}