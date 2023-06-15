import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function Doneaza() {
  return (
    <>
       <section className="sub-header">
        <Navbar />
        <h1>Donează</h1>
      </section>
      <section className="about">
      <div className="main">
      <img src="https://media.istockphoto.com/id/888343166/photo/make-this-world-a-brighter-place.jpg?s=612x612&w=0&k=20&c=6MQkcSUhlqeNby6OhsrUhMh0Z-dUB3OUc3JDk9NwB0A="/>
        <div className="all-text">
          <h4>Fă o donație!</h4>
          <h1>Acum poți face o diferență în viețile pacienților noștri!</h1>
          <p>Fiecare donație contează! Indiferent de mărimea sau frecvența contribuțiilor tale, vei face o contribuție valoroasă în lupta împotriva bolilor și în îmbunătățirea vieților celor aflați în suferință.</p>
          <div className="btn-txt">
            <button type="button">Donează</button>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </>
  );
}
