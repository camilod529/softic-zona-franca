import { useEffect, useState } from "react";
import { getCompanyByName } from "../api/session";
import { Navbar } from "../components";
import { useAppSelector } from "../hooks/store";
import Footer from "../components/Footer";

export const ProfileEmp = () => {
  const user = useAppSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ nombre_empresa: "", puntos: 0, nit: "" });
  // TODO: editar info solo para mostrar
  const getCompany = async () => {
    setIsLoading(true);
    await getCompanyByName(user.empresa_colaborador).then((res) => {
      setData(res);
      console.log(data);
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
        className="img-fluid"
      />
      {!isLoading ? (
        <div className="">
          <div className="container titulo">
            <div className="row">
              <h1 className="text-center mt-5 mb-5 display-2">Informacion De Mi Empresa</h1>
              <div className="col m-3">
                <img src="" className="img-fluid" alt="" />
              </div>
              <div className="col">
                <h1 className="m-3">Nombre:</h1>
                <p className="m-3 infoPerfiles">{data.nombre_empresa}</p>
                <h1 className="m-3 ">Puntos obtenidos:</h1>
                <p className="m-3 infoPerfiles">{data.puntos}</p>
                <h1 className="m-3">NIT empresarial:</h1>
                <p className="m-3 infoPerfiles">{data?.nit}</p>
              </div>
            </div>
            <div className="container text-center">
              <div className="row justify-content-md-center m-5"></div>
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
