import React from "react";
//
import { faBicycle, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cta from "ui/components/cta";

const LandingPage = () => {
  return (
    <main>
      <section className="container-fluid">
        <div className="row">
          <aside className="col-12 col-md-6 p-0">
            <Cta
              title="TODO TIPO DE BICIS"
              subtitle="TENEMOS CLÁSICAS, ELÉCTRICAS Y VINTAGE"
              buttonText="ECHA UN OJO AL CATALOGO"
              buttonIcon={faBicycle}
              linkTo="/catalogo"
              imgSrc={process.env.PUBLIC_URL + "/img/landing-1.jpg"}
            />
          </aside>
          <aside className="col-12 col-md-6 p-0">
            <Cta
              title="CONSIGUE PUNTOS"
              subtitle="CADA VEZ QUE ALQUILAS UNA BICI ACUMULAS PUNTOS"
              buttonText="TUS ALQUILERES"
              buttonIcon={faShoppingCart}
              linkTo="/alquiler"
              imgSrc={process.env.PUBLIC_URL + "/img/landing-2.jpg"}
            />
          </aside>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
