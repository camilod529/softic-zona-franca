import { Navbar } from "../components";
import { CalendarComp } from "../components/CalendarComp";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/store";

export const ProfilePage = () => {
  const user = useAppSelector((state) => state.user);
  console.log(user);
  return (
    <>
      {user.rol === 1 ? <>No deberia estar aca</> : ""}
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_76f4e9a348c87c16b40928e70145006630d90631.gif"
        className="img-fluid banner"
      />
      <div className="container perfil-contenido">
        <div className="row color-perfil">
          <div className="col-9 ">
            <h1 className="text-center mt-5 mb-5 display-2">Informacion De Perfil</h1>
          </div>
          {user.rol === 3 ? (
            <>
              <div className="row">
                <div className="col m-3">
                  <img src={user.foto} className="img-thumbnail" alt="..." />
                </div>
                <div className="col">
                  <h1 className="m-3">Nombre:</h1>
                  <p className="m-3 infoPerfiles">{user.nombre_1}</p>
                  <h1 className="m-3 ">Edad:</h1>
                  <p className="m-3 infoPerfiles">{user.edad}</p>
                  <h1 className="m-3">Correo electronico:</h1>
                  <p className="m-3 infoPerfiles">{user.correo_personal}</p>
                  <h1 className="m-3">Empresa:</h1>
                  <p className="m-3 infoPerfiles">{user.empresa_colaborador}</p>
                  <h1 className="m-3">Genero:</h1>
                  <p className="m-3 infoPerfiles">{user.genero}</p>
                  <h1 className="m-3">Gustos:</h1>
                  <p className="m-3 infoPerfiles">
                    <div className="col-4 col-sm-6">
                      {user.gustos?.map((gusto) => {
                        return gusto + " ";
                      })}
                    </div>
                  </p>

                  <Link
                    to="/intereses"
                    className="btn btn-primary green-btn"
                    // style={{width: '30%'}}
                  >
                    <p>Administrar intereses</p>
                  </Link>
                </div>
              </div>
              <div className="container text-center">
                <div className="row justify-content-md-center m-5"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {user.rol === 2 ? (
            <>
              <div className="row">
                <div className="col m-3">
                  <img src="" className="img-fluid" alt="" />
                </div>
                <div className="col">
                  <h1 className="m-3">Nombre:</h1>
                  <p className="m-3 infoPerfiles">{user.nombre_empresa}</p>
                  <h1 className="m-3 ">Puntos obtenidos:</h1>
                  <p className="m-3 infoPerfiles">{user.puntos}</p>
                  <h1 className="m-3">NIT empresarial:</h1>
                  <p className="m-3 infoPerfiles">{user.nit}</p>
                </div>
              </div>
              <div className="container text-center">
                <div className="row justify-content-md-center m-5"></div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
