import { useEffect, useState } from "react";
import { Navbar } from "../components";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import { getEvents } from "../api/session";
import { Event } from "../types/types.d";

export const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getEventsAsync = async () => {
    setIsLoading(true);
    await getEvents().then((res: Event[]) => {
      setEvents(res);
      console.log(events);
      setIsLoading(false);
    });
    console.log(events);
  };

  useEffect(() => {
    getEventsAsync();
  }, []);

  return (
    <>
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes/vdo_cabezotes/cabe_8119d8765cfacb5e022d989e82286070aeb16633.jpg"
        className="img-fluid banner"
      />

      <div className="container text-center top titulo">
        <div className="row mb-5">
          
            <h1>Lista de eventos</h1>
          
        </div>

        <div className="container text-center list">
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
                      {!isLoading
                        ? events?.length > 0 &&
                          events.map((event) => {
                            if (new Date(event.fecha_evento) > new Date()) {
                              return (
                                <EventCard
                                  key={event.id_evento}
                                  event={event}
                                  title={event.nombre_evento}
                                  description={event.descripcion_evento}
                                  imageUrl={event.foto_evento}
                                />
                              );
                            }
                            return <></>;
                          })
                        : ""}
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
                    {!isLoading
                      ? events.map((event) => {
                          if (new Date(event.fecha_evento) < new Date()) {
                            return (
                              <EventCard
                                key={event.id_evento}
                                event={event}
                                title={event.nombre_evento}
                                description={event.descripcion_evento}
                                imageUrl={event.foto_evento}
                              />
                            );
                          }
                          return <></>;
                        })
                      : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
