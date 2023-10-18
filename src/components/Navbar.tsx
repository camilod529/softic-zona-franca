import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/store";

export const Navbar = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            Softic
            {/* IMG avatar y nombre del usuario */}
            <img
              className="ms-2"
              src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611731.jpg?w=740&t=st=1697585995~exp=1697586595~hmac=df734503a938305cb6ac289c263bbcc1bbdfba962222f45162cf58ae097e71f9"
              alt=""
              style={{
                width: "3rem",
                borderRadius: "100%",
              }}
            />
          </a>
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
                    <Link className="nav-link" to={""}>
                      Administrar empresa
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={""}>
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
                    <Link className="nav-link" to={""}>
                      Administrar colaboradores
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={""}>
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
                    <Link className="nav-link" to={""}>
                      Eventos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={""}>
                      Mi empresa
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
              <li className="nav-item">
                <Link className="nav-link" to={""}>
                  Tabla puntajes
                </Link>
              </li>
            </ul>
            {user.rol === 2 || user.rol === 3 ? (
              <span className="navbar-text">Puntos: 1000</span>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
