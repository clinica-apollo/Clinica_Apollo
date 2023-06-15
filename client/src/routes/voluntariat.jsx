import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function Voluntariat() {
  return (
    <>
      <section className="sub-header">
        <Navbar />
        <h1>Voluntariat</h1>
      </section>
      <section className="about">
      <div className="main">
      <img src="https://media.istockphoto.com/id/1145183123/ro/fotografie/tineri-voluntari-ferici%C8%9Bi-care-se-%C3%AEnt%C3%A2lnesc-%C3%AEn-aer-liber-%C3%AEn-parc.jpg?s=612x612&w=0&k=20&c=h0RWOh453UlV0S0JD4BA6l0yZGY50CUUHuRTPXe2850="/>
        <div className="all-text">
          <h4>Voluntariat</h4>
          <h1>Aplică pentru a deveni voluntar la Clinica Apollo.</h1>
          <p>Prin intermediul acestei secțiuni, încurajăm persoanele dornice să ofere timpul lor și abilitățile în slujba altora să se implice în activități de voluntariat în cadrul spitalului nostru. <br/>Dacă dorești să faci o schimbare, aplică să devii voluntar prin formularul de mai jos.</p>
          <div className="btn-txt">
          <a href="/volunteer_aplication.pdf">
              <button type="button">Descarcă</button>
          </a>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </>
  );
}
