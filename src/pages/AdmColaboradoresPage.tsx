import { Link } from "react-router-dom";
import { AdmColCard, Navbar } from "../components";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getColaborators } from "../api/session";
import { Colaborator } from "../types/types";

export const AdmColaboradoresPage = () => {
  const [colaborators, setColaborator] = useState<Colaborator[]>([]);

  useEffect(() => {
    getColaborators()
      .then((res) => setColaborator(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <img
        src="https://www.zonafrancasantander.com/imagenes/vdo_cabezotes/cabe_93d666c2e538322a27e6562c19bc5597a2066bd6.jpg"
        className="contenido img-fluid"
      />
      <img
        src="https://i.imgur.com/9PDGhjx.jpg"
        className="contenido-alternativa img-fluid contenido "
      />
      <Navbar />
      <div className="container-adminEmp">
        <div className="content-container titulo">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-"></div>
              <div className="col-md">
                <h1>Colaboradores Vinculados</h1>
              </div>
              <div className="col-md-"></div>
            </div>
          </div>

          <div className="container text-center">
            <div className="row justify-content-md-center">
              <div className="col col-lg-2"></div>
              <div className="col-md-auto">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {colaborators.map((colaborator) => (
                    <AdmColCard
                      key={colaborator.documento_colaborador}
                      img={colaborator.foto}
                      title={
                        colaborator.nombre_1 + " " + colaborator.apellido_1
                      }
                    />
                  ))}

                  <div className="card" style={{ width: "18rem" }}>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"></li>
                      <Link
                        to={"/createColaborator"}
                        className="list-group-item"
                      >
                        <h5 className="card-title">Agregar colaborador</h5>
                      </Link>
                      <li className="list-group-item"></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-lg-2"></div>
            </div>
          </div>
        </div>
        <div className="footerEspecial"></div>
      </div>
      <Footer />
    </>
  );
};
