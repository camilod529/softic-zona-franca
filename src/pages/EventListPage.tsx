import { useEffect, useState } from "react";
import { Navbar } from "../components";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import { getEvents } from "../api/session";

export const EventList = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getEventsAsync = async () => {
    setIsLoading(true);
    await getEvents().then((res: []) => {
      setEvents(res);
      setIsLoading(false);
    });
    console.log(events);
  };

  useEffect(() => {
    getEventsAsync();
  }, []);

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

      <div className="container text-center top titulo">
        <div className="row ">
          ,<div className="col-1"></div>
          <div className="col-10">
            <h1>Lista de eventos</h1>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="container text-center list ">
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
                        ? events.map(
                            (event: {
                              id_evento: number;
                              nombre_evento: string;
                              descripcion_evento: string;
                              foto_evento: string;
                              fecha_evento: string;
                              fecha_evento_fin: string;
                              aforo_maximo: number;
                              aforo_registrado: number;
                              puntos_colaborador: number;
                              puntos_empresa: number;
                              puntos_castigo: number;
                              estado_boolean: boolean;
                              user_insert: string;
                              date_insert: string;
                            }) => {
                              if (new Date(event.fecha_evento) > new Date()) {
                                return (
                                  <>
                                    <EventCard
                                      key={event.id_evento}
                                      title={event.nombre_evento}
                                      description={event.descripcion_evento}
                                      imageUrl={event.foto_evento}
                                    />
                                  </>
                                );
                              }
                              return <></>;
                            }
                          )
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
                      ? events.map(
                          (event: {
                            id_evento: number;
                            nombre_evento: string;
                            descripcion_evento: string;
                            foto_evento: string;
                            fecha_evento: string;
                            fecha_evento_fin: string;
                            aforo_maximo: number;
                            aforo_registrado: number;
                            puntos_colaborador: number;
                            puntos_empresa: number;
                            puntos_castigo: number;
                            estado_boolean: boolean;
                            user_insert: string;
                            date_insert: string;
                          }) => {
                            if (new Date(event.fecha_evento) < new Date()) {
                              return (
                                <>
                                  <EventCard
                                    key={event.id_evento}
                                    title={event.nombre_evento}
                                    description={event.descripcion_evento}
                                    imageUrl={event.foto_evento}
                                  />
                                </>
                              );
                            }
                            return <></>;
                          }
                        )
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
