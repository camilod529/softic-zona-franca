import { PrizeCard } from "../components/PrizeCard";
import Footer from "../components/Footer";
import { Navbar } from "../components";
import { useEffect, useState } from "react";
import { getAwards } from "../api/session";
import { Award } from "../types/types";

export const PrizeCorner = () => {
  const [prizes, setPrizes] = useState<Award[]>([]);

  const fetchPrizes = async () => {
    await getAwards().then((res) => {
      setPrizes(res);
    });
  };

  useEffect(() => {
    fetchPrizes();
  }, []);

  return (
    <>
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_b271a675b677dfa13f571cf1ddbe66b79b10fd87.jpg"
        className="img-fluid banner"
      />
      <h1 className="cool-title mt-5">Tienda de Premios</h1>

      <div className="container text-center">
        {prizes &&
          prizes.map((prize) => (
            <PrizeCard key={prize.id_premio} prize={prize} />
          ))}
      </div>
      <Footer />
    </>
  );
};
