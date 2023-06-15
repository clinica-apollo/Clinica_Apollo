import { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useUser } from "../hooks/useUser";
import { request } from "../utils/http";
import { Link, useNavigate } from "react-router-dom";

export function MultumimPentruDonatie() {
  return (
    <>
      <section className="sub-header">
        <Navbar />
        <h1>Donează</h1>
      </section>
      <div className="log-cont">
        <div className="form-box">
          <h1 id="title">Multumim pentru donatie!</h1>
          <div className="btn-txt">
            <Link to="/donatii">
              <button type="button">Inapoi la donatii</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
