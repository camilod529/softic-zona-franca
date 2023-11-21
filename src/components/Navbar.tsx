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
      nit: "",
      gustos: [],
      foto: "",
      contrasena: "",
      estado_colaborador: true,
      puntos: 0,
      puntos_acumulados: 0,
      logo: "",
      documento_colaborador: "",
    });
    navigate("/");
  };

  console.log(user);

  useEffect(() => {
    // Send a query to the server to get the points
    axios
      .get("http://localhost:3000/api/points", {
        params: {
          nick: user.nit || user.documento_colaborador,
        },
        headers: {
          "x-access-token": localStorage.getItem("token"),
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
      <nav className="navbar navbar-expand-lg topside align-items-start p-0">
        <div className="container-fluid p-0 mside navitems">
          {user.rol === 0 ? null : (
            <Link
              className="navbar-brand"
              to={user.rol === 2 || user.rol === 3 ? "/profile" : "/mainPage"}
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
          )}
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
          <div className="navbar-collapse me-2 mside" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {user.rol === 1 ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link  navcolor"
                      aria-current="page"
                      to={"/adminEmpresa"}
                    >
                      <strong>Administrar empresas</strong>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link navcolor" to={"/admEventos"}>
                      <strong>Administrar eventos</strong>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link navcolor" to={"/admPrizes"}>
                      <strong>Administrar premios</strong>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link navcolor " to={"/rank"}>
                      <strong>Tabla de puntos</strong>
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
                      className="nav-link navcolor active"
                      aria-current="page"
                      to={"/admColaboradores"}
                    >
                      Administrar colaboradores
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link navcolor" to={"/events"}>
                      Eventos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link navcolor " to={"/rank"}>
                      Tabla de puntos
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
                      className="nav-link navcolor active"
                      aria-current="page"
                      to={"/events"}
                    >
                      Eventos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link navcolor" to={"/miEmpresa"}>
                      Mi empresa
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link navcolor" to={"/shop"}>
                      Premios
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link navcolor " to={"/rank"}>
                      Tabla de puntos
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
            <div className="d-flex ">
              {user.rol === 2 || user.rol === 3 ? (
                <span className="d-flex mside">
                  Puntos: {user.puntos || user.puntos_acumulados} &nbsp;
                </span>
              ) : (
                ""
              )}
              {user.rol !== 0 ? (
                <span
                  className="nav-item nav-link navcolor logout-button d-flex mside"
                  onClick={() => onLogut()}
                >
                  <i className="fa-solid fa-arrow-right-from-bracket cs"></i>
                  <strong>Cerrar sesion</strong>
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
