export const AdmEventCard = ({ id_evento = 0, title = "", desc = "", img = "" }) => {
  // delete event
  const deleteEvent = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/eventos/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
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
