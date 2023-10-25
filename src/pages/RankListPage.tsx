import { useEffect, useState } from "react";
import { getColaborators, getCompanies } from "../api/session";
import { Navbar, RankListItem } from "../components";
import Footer from "../components/Footer";
import { Colaborator, Company } from "../types/types";

export const RankList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState<Array<Company>>([]);
  const [colaboradores, setColaboradores] = useState<Array<Colaborator>>([]);
  const getAllData = async () => {
    setIsLoading(true);
    await getCompanies().then((res) => {
      setCompanies(res);
    });
    await getColaborators().then((res) => {
      setColaboradores(res);
      console.log(colaboradores);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_37d4bbfbf2565771790085cdc4767c80413274bd.jpg"
        className="img-fluid banner"
      />

      <div className="container text-center titulo">
        <div className="row mb-5">
          <div className="col-1"></div>
          <div className="col-10">
            <h1>Tabla de puntajes</h1>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="container text-center list">
          <div className="row justify-content-md-center">
            <div className="col-10">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button txt"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <strong>Empresas</strong>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                  >
                    <div className="container text-center mt-2 mb-3">
                      <div className="row">
                        <div className="col-2">
                          <strong>Rank</strong>
                        </div>
                        <div className="col-8">
                          <strong>Nombre</strong>
                        </div>
                        <div className="col-2">
                          <strong>ZF-Coins</strong>
                        </div>
                      </div>
                    </div>
                    {!isLoading
                      ? companies
                          ?.sort((a, b) => b.puntos - a.puntos)
                          .map((company, index) => (
                            <RankListItem
                              key={index}
                              index={index + 1}
                              nombre={company.nombre_empresa}
                              puntos={company.puntos}
                            />
                          ))
                      : ""}
                    <RankListItem index="" puntos={""} />
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      <strong>Colaboradores</strong>
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className="container text-center mt-2 mb-3">
                      <div className="row">
                        <div className="col-2">
                          <strong>Rank</strong>
                        </div>
                        <div className="col-8">
                          <strong>Nombre</strong>
                        </div>
                        <div className="col-2">
                          <strong>ZF-Coins</strong>
                        </div>
                      </div>
                    </div>
                    {!isLoading
                      ? colaboradores
                          ?.sort(
                            (a, b) => b.puntos_acumulados - a.puntos_acumulados
                          )
                          .map((colaborador, index) => (
                            <RankListItem
                              key={index}
                              index={index + 1}
                              nombre={
                                colaborador.nombre_1 +
                                " " +
                                colaborador.apellido_1
                              }
                              puntos={colaborador.puntos_acumulados}
                            />
                          ))
                      : ""}
                    <RankListItem index="" puntos={""} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
