import { Link } from "react-router-dom";

export const NavBarHome = () => {
  return (
    <div className="container-fluid text-center p-0 topside">
      <div className="row">
        <div className="col-2 d-flex align-items-start imglogo">
          <div className="text-center">
            <Link to={"/main"} className="login-text  logout-button ">
              <img
                src="https://www.zonafrancasantander.com/template//images/logo.png"
                className="rounded imgnav"
                alt="..."
              />
            </Link>
          </div>
        </div>
        <div className="col-8"></div>
        <div className="col-2 d-flex align-items-end justify-content-end">
          <Link to={"/login"} className="login-text  logout-button navcolor navitems">
            <i className="fa-solid fa-right-to-bracket navcolor navitems">&nbsp;Login</i>
          </Link>
        </div>
      </div>
    </div>
  );
};
