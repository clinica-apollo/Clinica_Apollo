import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function Farmacie() {
  return (
    <>
       <section className="sub-header">
        <Navbar />
        <h1>Farmacie</h1>
      </section>
      <section className="about">
      <div className="main">
      <img src="https://t3.ftcdn.net/jpg/05/01/98/88/360_F_501988803_Dbn4DH0Jpvzft22wOeYHGoHU9sJyOjyA.jpg"/>
        <div className="all-text">
          <h4>Farmacie</h4>
          <h1>Ai nevoie de medicamente? </h1>
          <p>Avem farmacii deschise 24/7 pentru orice problemă ați putea întâmpina.<br/>
          Adrese: <br/>Strada X, Nr. XZ Localitate<br/>
                  Strada Y, Nr. YZ Localitate
          </p>
          <div className="btn-txt">
            <Link to="/programari">
              <button type="button">Discuta cu un doctor</button>
            </Link>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </>
  );
}