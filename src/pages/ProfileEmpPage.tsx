import { useEffect, useState } from "react";
import { getCompanyByName } from "../api/session";
import { Navbar } from "../components";
import { useAppSelector } from "../hooks/store";

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
      {!isLoading ? (
        <div className="container">
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
      ) : (
        ""
      )}
    </>
  );
};
