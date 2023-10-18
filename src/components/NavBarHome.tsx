import { Link } from "react-router-dom";

export const NavBarHome = () => {
  return (
    <div className="container-fluid text-center p-0 topside">
      <div className="row">
        <div className="col-2 d-flex align-items-start"></div>
        <div className="col-8"></div>
        <div className="col-2 d-flex align-items-end justify-content-end">
          <Link to={"/login"} className="login-text  logout-button">
            <i className="fa-solid fa-right-to-bracket"></i>&nbsp;Login
          </Link>
        </div>
      </div>
    </div>
  );
};
