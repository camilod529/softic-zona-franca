import { Link } from "react-router-dom";

export const CompCard =() =>{
    return(
        <>
<div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Nombre de empresa</h5>
          <p className="card-text">
            
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">NIT</li>
          <li className="list-group-item">
            <Link to="#" className="card-link">
              Ubicacion
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="#" className="card-link">
              Pagina web
            </Link>
          </li>
        </ul>
      </div>
    </>
    );
};