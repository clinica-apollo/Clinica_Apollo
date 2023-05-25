import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function DespreNoi() {
  return (
    <>
      <section className="sub-header">
        <Navbar />
        <h1>Despre noi</h1>
      </section>
      <section className="despre-noi">
        <div className="row">
          <div className="despre-col">
            <h1>Suntem un spital bazat pe donatii</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Ullam maxime earum voluptates, dolor alias quas, iste doloremque a
              temporibus vel aliquid voluptatum enim dolorum ipsum facere
              debitis hic veniam. Vero!
            </p>
            <a href="doneaza.html" className="btn-text">
              Fa o donatie
            </a>
          </div>
        </div>
      </section>
      <section className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5567.456746600069!2d21.212973767016255!3d45.75659119056593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20maps!5e0!3m2!1sen!2sro!4v1684862719317!5m2!1sen!2sro"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <div className="container">
        <section className="cont-el">
          <div className="row">
            <div className="cont-col">
              <div>
                <i className="fa fa-home"></i>
                <span>
                  <h5>Strada X, Nr. Y</h5>
                  <p>Timisoara, Romania</p>
                </span>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <span>
                  <h5>~introduceti nr. de telefon~</h5>
                  <p>
                    De luni pana duminica, orele 8:00-18:00
                    <br />
                    Pentru urgente apelati la ~introd. nr. tel~
                  </p>
                </span>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <span>
                  <h5>abc@def.com</h5>
                  <p>Aveti vreo intrebare? Contactati-ne pe mail!</p>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
