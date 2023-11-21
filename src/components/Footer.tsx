import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer mobile-adjust-padding">
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col">
            <div>Kilómetro 4 Anillo Vial Río Frío, Edificio Suza Vita</div>
            <div>Floridablanca, Colombia</div>
            <div className="phone">
              (57) (7) 6 79 80 80 - (57) 316 742 81 09
            </div>
            <div>comunicaciones@zonafrancasantander.com</div>
          </div>
          <div className="col">
            <div className="left">SÍGUENOS EN:</div>
            <div className="icon">
              <Link
                target="_blank"
                to="http://www.facebook.com/zfsantander"
                title="Síguenos en Facebook"
              >
                <img
                  src="https://www.zonafrancasantander.com/template/images/icon-facebook.png"
                  className="img-responsive center-block"
                  alt=""
                />
              </Link>
            </div>
            <div className="icon">
              <Link target="_blank" to="https://twitter.com/zfsantander">
                <img
                  src="https://www.zonafrancasantander.com/template/images/icon-twitter.png"
                  className="img-responsive center-block"
                  alt=""
                />
              </Link>
            </div>
            <div className="icon">
              <Link
                target="_blank"
                to="https://www.linkedin.com/company/zonafrancasantander"
              >
                <img
                  src="https://www.zonafrancasantander.com/template/images/icon-linkedin.png"
                  className="img-responsive center-block"
                  alt=""
                />
              </Link>
            </div>
            <div className="icon">
              <Link
                target="_blank"
                to="https://www.instagram.com/zonafranca.santander/"
              >
                <img
                  src="https://www.zonafrancasantander.com/template/images/icon-instagram.png"
                  className="img-responsive center-block"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="col links block ">
            {" "}
            <div className="item animate">
              <Link to="https://www.zonafrancasantander.com//secciones-135-s/%BFqui%E9nes-somos.htm">
                <div className="animate">Conocer ZFSantander</div>
              </Link>
            </div>
            <div className="item animate">
              <Link to="https://www.zonafrancasantander.com//secciones-126-s/santander%2Fcolombia-nuestra-regi%F3n.htm">
                <div className="animate">¿Por qué ZFSantander?</div>
              </Link>
            </div>
            <div className="item animate">
              <Link to="https://www.zonafrancasantander.com//secciones-99-s/ubicaci%F3n.htm">
                <div className="animate">Ubicación</div>
              </Link>
            </div>
            <div className="item animate">
              <Link to="https://www.zonafrancasantander.com//noticias-11-m/noticias.htm">
                <div className="animate">Noticias</div>
              </Link>
            </div>
            <div className="item animate">
              <Link to="https://www.zonafrancasantander.com//contactos-6-m/cont%E1ctenos.htm">
                <div className="animate">Contáctenos</div>
              </Link>
            </div>
            <div className="item animate">
              <Link to="https://www.zonafrancasantander.com//proveedores-14-m/proveedores.htm">
                <div className="animate">Proveedores</div>
              </Link>
            </div>{" "}
          </div>
          <div className="col">
            {" "}
            <br className="visible-xs" />
            <Link to="https://www.zonafrancasantander.com/">
              <img
                src="https://www.zonafrancasantander.com/template/images/logo-footer.png"
                className="img-responsive center-block"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
