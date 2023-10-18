
import { CarouselEvent, NavBarHome } from "../components";
import Footer from "../components/Footer";

export const HomePage = () => {
  return (
    <>
    <NavBarHome />
    
    <img src="https://www.zonafrancasantander.com/imagenes/vdo_cabezotes/cabe_93d666c2e538322a27e6562c19bc5597a2066bd6.jpg" className="contenido img-fluid"/>
    <img
          src="https://i.imgur.com/9PDGhjx.jpg"
          className="contenido-alternativa img-fluid contenido "
        />
      <CarouselEvent/>
      <Footer/>

    </>
  );
};
