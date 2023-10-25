import { useEffect, useState } from "react";
import { getCompanyByName } from "../api/session";
import { Navbar } from "../components";
import { useAppSelector } from "../hooks/store";
import Footer from "../components/Footer";

export const ProfileEmp = () => {
  const user = useAppSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ nombre_empresa: "", puntos: 0 });
  // TODO: editar info solo para mostrar
  const getCompany = async () => {
    setIsLoading(true);
    await getCompanyByName(user.empresa_colaborador).then((res) => {
      setData(res);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getCompany();
  }, []);

  return (
    <>
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_76f4e9a348c87c16b40928e70145006630d90631.gif"
        className="img-fluid banner"
      />
      {!isLoading ? (
        <div className="">
          <div className="container titulo">
            <div className="row">
              <div className="col-9">
                <h1>Informacion De mi empresa</h1>
              </div>

              <div className="col-6">
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Nombre: </h3>
                  </div>
                  <div className="col-4 col-sm-6">{data.nombre_empresa}</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Puntos: </h3>
                  </div>
                  <div className="col-4 col-sm-6">{data.puntos}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};
