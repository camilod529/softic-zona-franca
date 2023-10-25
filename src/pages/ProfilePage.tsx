import { Navbar } from "../components";
import { CalendarComp } from "../components/CalendarComp";
import Footer from "../components/Footer";
import { useAppSelector } from "../hooks/store";

export const ProfilePage = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <>
      {user.rol === 1 ? <>No deberia estar aca</> : ""}
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_76f4e9a348c87c16b40928e70145006630d90631.gif"
        className="img-fluid banner"
      />
      <img
        src="https://i.imgur.com/9PDGhjx.jpg"
        className="contenido-alternativa img-fluid contenido "
      />
      <div className="container perfil-contenido">
        <div className="row color-perfil">
          <div className="col-9 ">
            <h1>Informacion De Perfil</h1>
          </div>
          {user.rol === 3 ? (
            <>
              <div className="col-4">
                <img src={user.foto} className="img-thumbnail" alt="..." />
              </div>
              <div className="col-6">
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Nombre: </h3>
                  </div>
                  <div className="col-4 col-sm-6">{user.nombre_1}</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Edad: </h3>
                  </div>
                  <div className="col-4 col-sm-6">{user.edad}</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Correo: </h3>
                  </div>
                  <div className="col-4 col-sm-6">{user.correo_personal}</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Empresa: </h3>
                  </div>
                  <div className="col-4 col-sm-6">{user.empresa_colaborador}</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Genero: </h3>
                  </div>
                  <div className="col-4 col-sm-6">{user.genero}</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Gustos: </h3>
                  </div>
                  <div className="col-4 col-sm-6">
                    {user.gustos?.map((gusto) => {
                      return gusto + " ";
                    })}
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          {user.rol === 2 ? (
            <>
              <div className="col-6">
                <div className="row profile">
                  <div className="col-8 col-sm-6">
                    <h3> Nombre: </h3>
                  </div>
                  <div className="col-4 col-sm-6">{user.nombre_empresa}</div>
                </div>
                <div className="row profile">
                  <div className="col-8 col-sm-6">
                    <h3> Puntos: </h3>
                  </div>
                  <div className="col-4 col-sm-6">{user.puntos}</div>
                </div>
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
