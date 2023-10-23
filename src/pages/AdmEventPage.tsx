import { AdmEventCard, Navbar } from "../components";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getEvents } from "../api/session";
import { Event as EventType } from "../types/types";
export const AdmEventPage = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const getEventsAsync = async () => {
    setIsLoading(true);
    await getEvents().then((res: EventType[]) => {
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
        src="https://www.zonafrancasantander.com/imagenes/vdo_cabezotes/cabe_93d666c2e538322a27e6562c19bc5597a2066bd6.jpg"
        className="contenido img-fluid"
      />
      <img
        src="https://i.imgur.com/9PDGhjx.jpg"
        className="contenido-alternativa img-fluid contenido "
      />
      <div className="container text-center top titulo">
        <div className="">
          <div className="col-md-"></div>
          <div className="col-md">
            <h1>Eventos Programados</h1>
          </div>
          <div className="col-md-"></div>
        </div>

        <div className="container text-center ">
          <div className="row justify-content-md-center">
            <div className="col col-lg-2"></div>
            <div className="col-md-auto">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {!isLoading
                  ? events?.map((event) => {
                      return (
                        <AdmEventCard
                          title={event.nombre_evento}
                          desc={event.descripcion_evento}
                          img={event.foto_evento}
                        />
                      );
                    })
                  : ""}
                <div className="card" style={{ width: "18rem" }}>
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <br></br>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h5 className="card-title btn btn-primary">
                        Agregar Evento
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-2"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
