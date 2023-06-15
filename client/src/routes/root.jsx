import { Navbar } from "../components/Navbar";
import Consultatii from "../assets/consultatii.jpg";
import Analize from "../assets/analize.jpg";
import Farmacie from "../assets/farmacie.jpeg";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export function Root() {
  return (
    <>
      <section className="header">
        <Navbar />
        <div className="text-box">
          <h1>Clinica Apollo</h1>
          <p>
          Alătură-te misiunii noastre de a oferi îngrijire medicală de calitate pentru toți, indiferent de posibilități financiare. Împreună putem face o<br/> diferență semnificativă în viața celor nevoiași. Donează astăzi și fii un erou în lupta pentru sănătate și fericire!
          </p>
          <Link to="/despre-noi" className="button-contact">
            Contactează-ne
          </Link>
        </div>
      </section>
        <section className="body-txt">
      <div className="container-txt">
        <div className="content">
          <h1 className="h1">Sănătatea dumneavoastră este prioritatea noastră.</h1>
          <p className="p">La Clinica Apollo, credem într-un viitor în care fiecare persoană are acces la îngrijiri medicale de calitate, indiferent de situația sa financiară. De aceea, suntem complet dependenți de generozitatea și susținerea dumneavoastră. Fiecare donație aduce mai aproape de realitate viziunea noastră: să oferim îngrijiri de top, tratamente inovatoare și tehnologii avansate pacienților noștri.</p>
        </div>
        <div className="imge-container">
          <img src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagine" className="image-txt" />
        </div>
      </div>
    </section> 
      <section className="despre">
        <div className="row">
          <div className="doctori-col">
            <img src={Farmacie} alt="poza"/>
          
            <div className="layer">
              <h3><Link to="/farmacie" className="btn">Farmacie</Link></h3>
            </div>
          </div>
           <div className="doctori-col">
              <img src={Consultatii} alt="poza"/>
              <div className="layer">
                 <h3><Link to="/programari" className="btn">Consultatii</Link></h3> 
              </div>
          </div>
          <div className="doctori-col">
              <img src={Analize} alt="poza"/>
              <div className="layer">
                <h3><Link to="/analize" className="btn">Analize</Link></h3>
              </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
