import { updateAwardState } from "../api/session";
import { Award } from "../types/types";

export const AdmPrizeCard = ({
  award,
  refresh,
}: {
  award: Award;
  refresh: () => void;
}) => {
  const onClick = async () => {
    await updateAwardState({ id_premio: award.id_premio }).then(() => {
      refresh();
    });
  };

  return (
    <>
      <div className="">
        <div className="card prizeCard">
          <img src={award.foto} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{award.nombre_premio}</h5>
            <p className="card-text">{award.detalles_premio}</p>
            <p className="card-text">{award.coste_premio} puntos</p>
            <button onClick={onClick} className="btn green-btn">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
