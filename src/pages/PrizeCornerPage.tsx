import { PrizeCard } from "../components/PrizeCard";
import Footer from "../components/Footer";
import { Navbar } from "../components";
import { useEffect, useState } from "react";
import { Prize } from "../types/types";
import { getAwards } from "../api/session";
export const PrizeCorner = () => {
  const [prices, setPrices] = useState<Array<Prize>>([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
  const getEventsAsync = async () => {
    setIsLoading(true);
    await getAwards().then((res: Prize[]) => {
      console.log(res);
      setIsLoading(false);
      setPrices(res);
    });
  };

  useEffect(() => {
    getEventsAsync();
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="stylish-headline mt-5">Tienda de Premios</h1>

      <div className="container text-center">
        <div className="container-awards">
          {!isLoading
            ? prices?.map((prize: Prize) => {
                console.log(prize);
                return (
                  <PrizeCard
                    nombre={prize.nombre_premio}
                    desc={prize.detalles_premio}
                    precio={prize.coste_premio}
                  />
                );
              })
            : ""}
        </div>
      </div>
      <Footer />
    </>
  );
};
