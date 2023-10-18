import { useAppSelector } from "../hooks/store";

export const ProfilePage = () => {
  const user = useAppSelector((state) => state.user);
  console.log(user);
  return (
    <>
      {user.role === 1 ? <>No deberia estar aca</> : ""}

      <div className="container">
        <div className="row">
          <div className="col-9">
            <h1>Informacion De Perfil</h1>
          </div>
          {user.role === 3 ? (
            <>
              <div className="col-4">
                <img src="..." className="img-thumbnail" alt="..." />
              </div>
              <div className="col-6">
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Nombre: </h3>
                  </div>
                  <div className="col-4 col-sm-6">Pepito Perez ...</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Edad: </h3>
                  </div>
                  <div className="col-4 col-sm-6">25</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Numero de contacto: </h3>
                  </div>
                  <div className="col-4 col-sm-6">318457263</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Correo: </h3>
                  </div>
                  <div className="col-4 col-sm-6">pperez@zfranca.com</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Empresa: </h3>
                  </div>
                  <div className="col-4 col-sm-6">ElGualilo</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Genero: </h3>
                  </div>
                  <div className="col-4 col-sm-6">Masculino</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Gustos: </h3>
                  </div>
                  <div className="col-4 col-sm-6"></div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          {user.role === 2 ? (
            <>
              <div className="col-6">
                <div className="row profile">
                  <div className="col-8 col-sm-6">
                    <h3> Nombre: </h3>
                  </div>
                  <div className="col-4 col-sm-6">Pepito Perez ...</div>
                </div>
                <div className="row profile">
                  <div className="col-8 col-sm-6">
                    <h3> Edad: </h3>
                  </div>
                  <div className="col-4 col-sm-6">25</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Numero de contacto: </h3>
                  </div>
                  <div className="col-4 col-sm-6">318457263</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Correo: </h3>
                  </div>
                  <div className="col-4 col-sm-6">pperez@zfranca.com</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Empresa: </h3>
                  </div>
                  <div className="col-4 col-sm-6">ElGualilo</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Genero: </h3>
                  </div>
                  <div className="col-4 col-sm-6">Masculino</div>
                </div>
                <div className="row, profile">
                  <div className="col-8 col-sm-6">
                    <h3> Gustos: </h3>
                  </div>
                  <div className="col-4 col-sm-6"></div>
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
