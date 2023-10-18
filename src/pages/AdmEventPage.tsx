import { AdmEventCard } from "../components";
import { Link } from "react-router-dom";
export const AdmEventPage = () => {
  return (
    <>
      <div className="container text-center top">
        <div className="row">
          <div className="col-md-"></div>
          <div className="col-md">
            <h1>Eventos Programados</h1>
          </div>
          <div className="col-md-"></div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2"></div>
          <div className="col-md-auto">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <AdmEventCard />
              <AdmEventCard />
              <AdmEventCard />
              <AdmEventCard />
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <br></br>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h5 className="card-title">Agregar Evento</h5>
                  </li>
                  <li className="list-group-item">
                    <p className="card-text">Haga click aqui para crear un evento nuevo</p>
                  </li>
                  <li className="list-group-item">
                    <Link to="#" className="card-link">
                      Card link
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-lg-2"></div>
        </div>
      </div>
    </>
  );
};
