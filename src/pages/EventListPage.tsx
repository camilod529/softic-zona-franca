import { Navbar } from "../components";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
export const EventList = () => {
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

      <div className="container text-center top">
        <div className="row titulo">,
          <div className="col-1"></div>
          <div className="col-10">
            <h1 >Lista de eventos</h1>
          </div>
          <div className="col-1"></div>
        </div>
      

      <div className="container text-center list titulo">
        <div className="row justify-content-md-center">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Proximos eventos
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                  <div className="accordion-body">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Eventos pasados
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                  <EventCard />
                  <EventCard />
                  <EventCard />
                  <EventCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      </div>
    <Footer/>
    </>
  );
};
