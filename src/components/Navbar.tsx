import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/store";
import { useUserActions } from "../hooks/useUserActions";
import { useEffect } from "react";
import axios from "axios";

export const Navbar = () => {
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const { setUser } = useUserActions();

  const onLogut = () => {
    setUser({
      rol: 0,
      nick: "",
      nombre_1: "",
      nombre_empresa: "",
      edad: "",
      fecha_nacimiento: "",
      correo_personal: "",
      correo_empresarial: "",
      empresa_colaborador: "",
      genero: "",
      gustos: [],
      foto: "",
      contrasena: "",
      estado_colaborador: false,
      puntos: 0,
      puntos_acumulados: 0,
    });
    navigate("/");
  };

  useEffect(() => {
    // Send a query to the server to get the points
    axios
      .get("http://localhost:3000/Linkpi/points", {
        params: {
          nick: user.nick,
          rol: user.rol,
        },
      })
      .then((res) => {
        if (res.data.puntos) {
          setUser({ ...user, puntos: res.data.puntos });
        }

        if (res.data.puntos_acumulados) {
          setUser({ ...user, puntos_acumulados: res.data.puntos_acumulados });
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <nav className="navbar na vbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to={user.rol === 2 || user.rol === 3 ? "/profile" : ""}
          >
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
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {user.rol === 1 ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"/adminEmpresa"}
                    >
                      Administrar empresas
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
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"/LinkdmColaboradores"}
                    >
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
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"/events"}
                    >
                      Eventos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/miEmpresa"}>
                      Mi empresa
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/shop"}>
                      Premios
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
              <li className="nav-item">
                <Link className="nav-link " to={"/rank"}>
                  Tabla de puntos
                </Link>
              </li>
            </ul>
            {user.rol === 2 || user.rol === 3 ? (
              <span className="d-flex">
                Puntos: {user.puntos || user.puntos_acumulados} &nbsp;
              </span>
            ) : (
              ""
            )}
            {user.rol !== 0 ? (
              <span
                className="nav-item nav-link logout-button d-flex"
                onClick={() => onLogut()}
              >
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
