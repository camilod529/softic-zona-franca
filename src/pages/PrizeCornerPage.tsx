import { PrizeCard } from "../components/PrizeCard";
import Footer from "../components/Footer";
import { Navbar } from "../components";
export const PrizeCorner = () => {
  return (
    <>
    <Navbar/>
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
      <Footer/>
    </>
  );
};
