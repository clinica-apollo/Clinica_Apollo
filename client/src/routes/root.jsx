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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            magni reiciendis! Deleniti quas, voluptatibus harum
            <br /> numquam beatae nihil accusamus excepturi voluptas repudiandae
            repellat quis officia iure recusandae illo vero dolore?
          </p>
          <Link to="/despre-noi" className="button-contact">
            Contact us
          </Link>
        </div>
      </section>
    <section class="body-txt">
      <div className="container-txt">
      <div className="content">
        <h1 className="h1-txt">Sănătatea dumneavoastră este prioritatea noastră.</h1>
        <p className="p-txt">La Clinica Apollo, credem într-un viitor în care fiecare persoană are acces la îngrijiri medicale de calitate, indiferent de situația sa financiară. De aceea, suntem complet dependenți de generozitatea și susținerea dumneavoastră. Fiecare donație aduce mai aproape de realitate viziunea noastră: să oferim îngrijiri de top, tratamente inovatoare și tehnologii avansate pacienților noștri.</p>
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
              <h3><a className="btn">Farmacie</a></h3>
            </div>
          </div>
           <div className="doctori-col">
              <img src={Consultatii} alt="poza"/>
              <div className="layer">
                 <h3><Link to="/servicii" className="btn">Consultatii</Link></h3> 
              </div>
          </div>
          <div className="doctori-col">
              <img src={Analize} alt="poza"/>
              <div className="layer">
                <h3><a href="" className="btn">Analize</a></h3>
              
              </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
