import { CarouselEvent, Navbar } from "../components";
import Footer from "../components/Footer";

export const MainPage = () => {
  return (
    <>
      <Navbar />

      <img
        src="https://www.zonafrancasantander.com/imagenes/vdo_cabezotes/cabe_93d666c2e538322a27e6562c19bc5597a2066bd6.jpg"
        className="img-fluid banner"
      />

      <div className="services m-b-30">
        <div className="col-xs-6 arrow hidden-xs">
          SERVICIOS EN LÍNEA <div className="corner"></div>
        </div>

        <div className="serv-container">
          <div className="col-xs-12 col-sm-12 col-md-6 col-md-push-6 col-lg-6 col-lg-push-6 text-left content-service">
            <a
              href="https://www.zonafrancasantander.com//contactos-6-m/contactenos.htm"
              className="item"
            >
              <div>
                <img
                  src="https://www.zonafrancasantander.com/template/images/item-service-1.png"
                  className="img-responsive center-block"
                  alt=""
                />
              </div>
              Contacto
            </a>

            <a
              href="http://zonafrancasantander.com/secciones-172-s/trabaje-con-nosotros.htm"
              className="item"
            >
              <div>
                <img
                  src="https://www.zonafrancasantander.com/template/images/item-service-2.png"
                  className="img-responsive center-block"
                  alt=""
                />
              </div>
              Trabaje con nosotros
            </a>

            <a
              href="https://www.zonafrancasantander.com/secciones-143-s/empresasinstaladas.htm"
              className="item"
            >
              <div>
                <img
                  src="https://www.zonafrancasantander.com/template/images/item-service-3.png"
                  className="img-responsive center-block"
                  alt=""
                />
              </div>
              Directorio de empresas
            </a>

            <a
              href="https://www.zonafrancasantander.com//oferta-inmobiliaria-15-m/todas-las-ofertas.htm"
              className="item"
            >
              <div>
                <img
                  src="https://www.zonafrancasantander.com/template/images/item-service-4.png"
                  className="img-responsive center-block"
                  alt=""
                />
              </div>
              Oferta inmobiliaria
            </a>
          </div>
        </div>
      </div>

      <br />
      <div className="container-fluid mt-5">
        <div className="row ">
          <div className="col p-5">
            <CarouselEvent />
          </div>

          <div className="col p-5">
            <p className="cool-title">Zona Franca Santander</p>
            <p>
              Somos la primera Zona Franca en Colombia enfocada a la industria
              de Servicios Globales y la única Zona Franca Multiempresarial en
              la región de Santander.
            </p>
          </div>
        </div>
      </div>

      {/* <img
        src="https://i.imgur.com/9PDGhjx.jpg"
        className="contenido-alternativa img-fluid contenido "
      /> */}

      <Footer />
    </>
  );
};
