import { deactivateColaborator } from "../api/session";

export const AdmColCard = ({
  img,
  title,
  documento_colaborador,
  refetch,
}: {
  img: string;
  title: string;
  documento_colaborador: string;
  refetch: () => void;
}) => {
  const onClick = async () => {
    await deactivateColaborator({ documento_colaborador }).then(() =>
      refetch()
    );
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>

        <button onClick={onClick} className="green-btn">
          Eliminar
        </button>
      </div>
    </>
  );
};
