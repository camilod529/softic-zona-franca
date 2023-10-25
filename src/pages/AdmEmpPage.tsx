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
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_a3e99dc8bef438dc841961034d5b9f04032c72f3.jpg"
        className="img-fluid banner"
      />
      <div className="container-adminEmp ">
        <div className="content-container titulo">
          <div className="container text-center">
            <div className="row">
              <div className="col-md mb-5 mt-3">
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
                        return (
                          <CompCard
                            title={company.nombre_empresa}
                            nit={company.nit}
                          />
                        );
                      })
                    : "Cargando..."}
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body" style={{paddingTop: '6rem', paddingBottom: '6rem'}}>
                      <Link to={"/createCompany"} className="green-btn">
                        
                        <h5 className="card-title btn">Agregar empresa</h5>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerEspecial"></div>
      </div>
      <Footer />
    </>
  );
};
