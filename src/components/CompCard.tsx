export const CompCard = ({ title = "", desc = "" }) => {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src="" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};
