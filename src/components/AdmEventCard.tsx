import { deactivateEvent } from "../api/session";

export const AdmEventCard = ({
  id_evento = 0,
  title = "",
  desc = "",
  img = "",
  getEvents,
}: {
  id_evento: number;
  title: string;
  desc: string;
  img: string;
  getEvents: () => void;
}) => {
  // delete event
  const deleteEvent = async (id: number) => {
    await deactivateEvent({ id_evento: id }).then(() => getEvents());
  };
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
        </div>
        <p className="green-btn" onClick={() => deleteEvent(id_evento)}>
          Eliminar
        </p>
      </div>
    </>
  );
};
