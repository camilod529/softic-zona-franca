import { Link } from "react-router-dom";

export const CompCard = ({ title = "", nit = "", logo = "" }) => {
  console.log({ title, nit, logo })
  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h5>{title}</h5>
        <p className="card-text"></p>

        <ul className="list-group list-group-flush">
          <img style={{ width: "75%", height: "75%", objectFit: "cover" }} src={logo} alt="logo" />
          <li className="list-group-item">
            NIT: <span>{nit}</span>
          </li>
          <li className="list-group-item">
            <Link to="#" className="card-link"></Link>
          </li>
          <li className="list-group-item green-btn">Eliminar empresa</li>
        </ul>
      </div>
    </>
  );
};
