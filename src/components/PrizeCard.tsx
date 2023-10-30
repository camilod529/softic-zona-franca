import { Award } from "../types/types";

export const PrizeCard = ({ prize }: { prize: Award }) => {
  return (
    <>
      <div className="col">
        <div className="card prizeCard">
          <img src={prize.foto} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{prize.nombre_premio}</h5>
            <p className="card-text">{prize.detalles_premio}</p>
            <p className="card-text">{prize.coste_premio} puntos</p>
            <button className="btn green-btn">
              Redimir
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
