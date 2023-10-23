export const AdmEventCard = ({ title = "", desc = "", img = "" }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="mt-5 btn btn-primary green-button">eliminar</p>
        </div>

      </div>
    </>
  );
};
