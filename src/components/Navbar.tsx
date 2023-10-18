import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/store";
import { useUserActions } from "../hooks/useUserActions";

export const Navbar = () => {
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const { setUser } = useUserActions();

  const onLogut = () => {
    setUser({
      rol: 0,
      nick: "",
      nombre: "",
      edad: "",
      numeroContacto: "",
      correo: "",
      empresa: "",
      genero: "",
      gustos: [],
      contrasena: "",
      estado: true,
      puntos: 0,
      correoEmpresarial: "",
      urlImg: "",
    });
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg color-nav-bar">
        <div className="container-fluid d-flex justify-content-between ">
          <Link className="navbar-brand" to={user.rol === 2 || user.rol === 3 ? "/profile" : ""}>
            {user.rol === 1 ? "Inicio" : "Perfil"}
            {/* IMG avatar y nombre del usuario */}
            {user.rol === 3 ? (
              <img
                className="ms-2"
                src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611731.jpg?w=740&t=st=1697585995~exp=1697586595~hmac=df734503a938305cb6ac289c263bbcc1bbdfba962222f45162cf58ae097e71f9"
                alt=""
                style={{
                  width: "3rem",
                  borderRadius: "100%",
                }}
              />
            ) : (
              ""
            )}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {user.rol === 1 ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/adminEmpresa"}>
                      Administrar empresa
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admEventos"}>
                      Administrar eventos
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
              {user.rol === 2 ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admColaboradores"}>
                      Administrar colaboradores
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/events"}>
                      Eventos
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
              {user.rol === 3 ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/events"}>
                      Eventos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/miEmpresa"}>
                      Mi empresa
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
              <li className="nav-item">
                <Link className="nav-link" to={"/rank"}>
                  Tabla puntajes
                </Link>
              </li>
            </ul>
            {user.rol === 2 || user.rol === 3 ? (
              <span className="navbar-text">Puntos: 1000</span>
            ) : (
              ""
            )}
            {user.rol !== 0 ? (
              <span className="nav-item logout-button" onClick={() => onLogut()}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                &nbsp;Cerrar sesion
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
