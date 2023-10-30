import { Link } from "react-router-dom";
import { AdmColCard, Navbar } from "../components";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getColaboratorsByCompany } from "../api/session";
import { Colaborator } from "../types/types";

export const AdmColaboradoresPage = () => {
  const [colaborators, setColaborator] = useState<Colaborator[]>([]);

  useEffect(() => {
    getColaboratorsByCompany()
      .then((res) => setColaborator(res))
      .catch((err) => console.log(err));
  }, []);

  const refetch = async () => {
    getColaboratorsByCompany()
      .then((res) => setColaborator(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_37d4bbfbf2565771790085cdc4767c80413274bd.jpg"
        className="img-fluid banner"
      />

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
                  {colaborators && colaborators.map((colaborator) => (
                    <AdmColCard
                      key={colaborator.documento_colaborador}
                      documento_colaborador={colaborator.documento_colaborador}
                      img={colaborator.foto}
                      title={
                        colaborator.nombre_1 + " " + colaborator.apellido_1
                      } 
                      refetch={refetch}
                    />
                  ))}

                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body"></div>
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
