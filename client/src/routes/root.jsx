import { Navbar } from "../components/Navbar";

import Doctor1 from "../assets/doctor1.jpg";
import Doctor2 from "../assets/doctor2.jpg";
import Doctor3 from "../assets/doctor3.jpg";
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
      {/* despre noi */}
      <section className="despre">
        <h1>Doctori</h1>
        <p1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit velit
          quisquam dolor aperiam debitis at rem!
        </p1>
        <div className="row">
          <div className="doctori-col">
            <img src={Doctor1} alt="poza locatie" />
            <div className="layer">
              <h3>DOCTOR 1</h3>
            </div>
          </div>
          <div className="doctori-col">
            <img src={Doctor2} alt="poza locatie" />
            <div className="layer">
              <h3>DOCTOR 2</h3>
            </div>
          </div>
          <div className="doctori-col">
            <img src={Doctor3} alt="poza locatie" />
            <div className="layer">
              <h3>DOCTOR 3</h3>
            </div>
          </div>
        </div>
      </section>
      {/* servicii */}
      <section className="servicii">
        <h1>Servicii</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptatibus, ab repudiandae officiis est nesciunt quas, ducimus saepe
          corrupti, doloribus dignissimos nihil iusto cupiditate vitae deserunt
          quia laudantium commodi. Mollitia, tenetur!
        </p>
        <div className="row">
          <div className="ser-col">
            <h3>Servicii</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium asperiores dignissimos ipsam corrupti iusto, tempore
              minus nam non debitis nulla? Iure nobis fuga aperiam inventore
              doloribus consequuntur molestias error nisi.
            </p>
          </div>
          <div className="ser-col">
            <h3>Specializari</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium asperiores dignissimos ipsam corrupti iusto, tempore
              minus nam non debitis nulla? Iure nobis fuga aperiam inventore
              doloribus consequuntur molestias error nisi.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
