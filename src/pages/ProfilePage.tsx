import { Navbar } from "../components";
import { useAppSelector } from "../hooks/store";

export const ProfilePage = () => {
  const user = useAppSelector((state) => state.user);
  console.log(user);
  return (
    <>
      {user.rol === 1 ? <>No deberia estar aca</> : ""}
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-9">
            <h1>Informacion De Perfil</h1>
          </div>
          {user.rol === 3 ? (
            <>
              <div className="col-4">
                <img src={user.urlImg} className="img-thumbnail" alt="..." />
              </div>
              <div className="col-6">
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Nombre: </h3>
                  </div>
                  <div className="col-4 col-sm-6">{user.nombre}</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Edad: </h3>
                  </div>
                  <div className="col-4 col-sm-6">{user.edad}</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Numero de contacto: </h3>
                  </div>
                  <div className="col-4 col-sm-6">{user.numeroContacto}</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Correo: </h3>
                  </div>
                  <div className="col-4 col-sm-6">{user.correo}</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Empresa: </h3>
                  </div>
                  <div className="col-4 col-sm-6">{user.empresa}</div>
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
                    {user.gustos.map((gusto) => {
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
                  <div className="col-4 col-sm-6">{user.nombre}</div>
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
    </>
  );
};
