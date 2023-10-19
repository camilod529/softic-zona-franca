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
    console.log("Esto se ejecutó");
    axios
      .get("http://localhost:3000/api/points", {
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
      <nav className="navbar navbar-expand-lg color-nav-bar">
        <div className="container-fluid d-flex justify-content-between ">
          <Link className="navbar-brand" to={user.rol === 2 || user.rol === 3 ? "/profile" : ""}>
            {user.rol === 1 ? "Inicio" : "Perfil"}
            {/* IMG avatar y nombre del usuario */}
            {user.rol === 3 ? (
              <img
                className="ms-2"
                src={user.foto}
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
                <Link className="nav-link" to={"/rank"}>
                  Tabla puntajes
                </Link>
              </li>
            </ul>
            {user.rol === 2 || user.rol === 3 ? (
              <span className="navbar-text">
                Puntos: {user.puntos || user.puntos_acumulados} &nbsp;
              </span>
            ) : (
              ""
            )}
            {user.rol !== 0 ? (
              <span className="nav-item nav-link logout-button" onClick={() => onLogut()}>
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
