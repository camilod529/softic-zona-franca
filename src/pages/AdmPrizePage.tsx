import { Link } from "react-router-dom";
import { Navbar, AdmPrizeCard } from "../components";

export const AdmPrizePage = () => {
  return (
    <>
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_37d4bbfbf2565771790085cdc4767c80413274bd.jpg"
        className="img-fluid banner"
      />

      <br />
      <div className="container text-center">
        <div className="row">
          <AdmPrizeCard />
          <AdmPrizeCard />
          <AdmPrizeCard />
          <AdmPrizeCard />
        </div>
        <div className="row">
          <AdmPrizeCard />
          <AdmPrizeCard />
          <AdmPrizeCard />
          <AdmPrizeCard />
        </div>
        <div className="row">
          <AdmPrizeCard />
          <AdmPrizeCard />
          <AdmPrizeCard />
          <AdmPrizeCard />
        </div>
        <div className="row">
          <AdmPrizeCard />
          <AdmPrizeCard />
          <AdmPrizeCard />
          <AdmPrizeCard />
        </div>
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
