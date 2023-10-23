import { Link } from "react-router-dom";

export const CompCard = ({ title = "", nit = "" }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"></p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            NIT: <span>{nit}</span>
          </li>
          <li className="list-group-item">
            <Link to="#" className="card-link"></Link>
          </li>
          <li className="list-group-item btn btn-primary green-button mt-3">eliminar empresa</li>
        </ul>
      </div>
    </>
  );
};
