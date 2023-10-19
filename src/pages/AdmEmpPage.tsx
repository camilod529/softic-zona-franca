import { Link } from "react-router-dom";
import { Navbar } from "../components";
import { CompCard } from "../components/CompCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getCompanies } from "../api/session";
import { Company } from "../types/types";

export const AdmEmp = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getCompaniesAsync = async () => {
    setIsLoading(true);
    await getCompanies().then((res: Company[]) => {
      setCompanies(res);
      console.log(companies);
      setIsLoading(false);
    });
    console.log(companies);
  };

  useEffect(() => {
    getCompaniesAsync();
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
      <div className="container-adminEmp ">
        <div className="content-container titulo">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-"></div>
              <div className="col-md">
                <h1>Compañias Vinculadas</h1>
              </div>
              <div className="col-md-"></div>
            </div>
          </div>

          <div className="container text-center">
            <div className="row justify-content-md-center">
              <div className="col col-lg-2"></div>
              <div className="col-md-auto">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {!isLoading
                    ? companies.map((company: Company) => {
                        return <CompCard title={company.nombre_empresa} desc={company.nit} />;
                      })
                    : "Cargando..."}
                  {/* <CompCard />
                  <CompCard />
                  <CompCard />
                  <CompCard />
                  <CompCard />
                  <CompCard />
                  <CompCard />
                  <CompCard /> */}
                  <div className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body"></div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"></li>
                      <Link to={"/createColaborator"} className="list-group-item">
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
