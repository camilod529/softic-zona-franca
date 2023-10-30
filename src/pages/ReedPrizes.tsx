import { useEffect, useState } from "react";
import { Navbar } from "../components";
import Footer from "../components/Footer";
import { PrizeCard } from "../components/PrizeCard";
import { getReclaimedAwards } from "../api/session";
import { Award } from "../types/types";

export const ReedPrizes = () => {
  const [awards, setAwards] = useState<Award[]>([]);

  useEffect(() => {
    getReclaimedAwards().then((res) => setAwards(res));
  }, []);

  return (
    <>
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_b271a675b677dfa13f571cf1ddbe66b79b10fd87.jpg"
        className="img-fluid banner"
      />
      <h1 className="cool-title mt-5">Premios reclamados</h1>

      <div className="container text-center">
        {awards &&
          awards.map((award) => <PrizeCard prize={award} />)}
      </div>
      <Footer />
    </>
  );
};
