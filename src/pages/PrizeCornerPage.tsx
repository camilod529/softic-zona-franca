import { PrizeCard } from "../components/PrizeCard";
import Footer from "../components/Footer";
import { Navbar } from "../components";
export const PrizeCorner = () => {
  return (
    <>
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_b271a675b677dfa13f571cf1ddbe66b79b10fd87.jpg"
        className="img-fluid banner"
      />
      <h1 className="stylish-headline mt-5">Tienda de Premios</h1>

      <div className="container text-center">
        <div className="row">
          <PrizeCard />
          <PrizeCard />
          <PrizeCard />
          <PrizeCard />
        </div>
        <div className="row">
          <PrizeCard />
          <PrizeCard />
          <PrizeCard />
          <PrizeCard />
        </div>
        <div className="row">
          <PrizeCard />
          <PrizeCard />
          <PrizeCard />
          <PrizeCard />
        </div>
        <div className="row">
          <PrizeCard />
          <PrizeCard />
          <PrizeCard />
          <PrizeCard />
        </div>
      </div>
      <Footer />
    </>
  );
};
