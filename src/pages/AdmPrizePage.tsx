import { Link } from "react-router-dom";
import { Navbar, AdmPrizeCard } from "../components";
import { useEffect, useState } from "react";
import { getAwards } from "../api/session";
import { Award } from "../types/types";

export const AdmPrizePage = () => {
  const [awards, setAwards] = useState<Award[]>([]);

  useEffect(() => {
    getAwards().then((res) => {
      setAwards(res);
    });
  }, []);

  const refresh = () => {
    getAwards().then((res) => {
      setAwards(res);
    });
  };

  return (
    <>
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_37d4bbfbf2565771790085cdc4767c80413274bd.jpg"
        className="img-fluid banner"
      />

      <br />
      <div className="container text-center">
        {awards?.map((award) => (
          <AdmPrizeCard key={award.id_premio} award={award} refresh={refresh} />
        ))}

        {awards.length === 0 && <h1>No hay premios</h1>}
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <div
          className="card-body"
          style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
        >
          <Link to={"/createPrize"} className="btn btn/primary green-btn">
            <h5 className="card-title btn">Agregar premio</h5>
          </Link>
        </div>
      </div>
    </>
  );
};
