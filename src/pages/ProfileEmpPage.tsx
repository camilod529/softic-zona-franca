import { Navbar } from "../components";
import Footer from "../components/Footer";

export const ProfileEmp = () => {
  // TODO: editar info solo para mostrar
  return (
    <>
    <img
        src="https://www.zonafrancasantander.com/imagenes/vdo_cabezotes/cabe_93d666c2e538322a27e6562c19bc5597a2066bd6.jpg"
        className="contenido img-fluid"
      />
      <img
        src="https://i.imgur.com/9PDGhjx.jpg"
        className="contenido-alternativa img-fluid contenido "
      />
      <Navbar />

      <div className="container titulo">
        <div className="row">
          <div className="col-9">
            <h1>Informacion De Perfil</h1>
          </div>
          <div className="col-4">
            <img src="..." className="img-thumbnail" alt="..." />
          </div>
          <div className="col-6">
            <div className="row, profile">
              <div className="col-8 col-sm-6">
                <h3> Nombre: </h3>
              </div>
              <div className="col-4 col-sm-6">Nombre de la empresa</div>
            </div>
            <div className="row, profile">
              <div className="col-8 col-sm-6">
                <h3> Ubicacion </h3>
              </div>
              <div className="col-4 col-sm-6">Ubicaciones de la empreza en el campus</div>
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
                <h3> Descripción: </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-9">
                Descripcion de la empreza y a lo que se dedica <br /> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Pariatur a eum quidem quis amet incidunt dolore
                explicabo. Eaque dignissimos earum rerum nihil facere. Natus veritatis voluptatum,
                consequatur autem numquam ipsam!
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
