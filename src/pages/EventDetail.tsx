import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import { Event } from "../types/types.d";
import { Navbar } from "../components";

export function EventDetail() {
  const [event, setEvent] = useState<Event>({
    aforo_maximo: 0,
    aforo_registrado: 0,
    descripcion_evento: "",
    estado_boolean: false,
    fecha_evento: new Date(),
    fecha_evento_fin: new Date(),
    id_evento: 0,
    nombre_evento: "",
    puntos_castigo: 0,
    puntos_colaborador: 0,
    puntos_empresa: 0,
    foto_evento: "",
  });
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/event/${id}`)
      .then((res) => setEvent(res.data))
      .catch((err) => console.log(err));
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
      <div className="">
        <div className="container titulo">
          {event.id_evento !== 0 ? (
            <>
              <h1 className="stylish-headline mt-5 mb-5">{event.nombre_evento}</h1>
              <img
                className="rounded mx-auto d-block img-fluid mb-5 mt-5"
                src={event.foto_evento}
                alt={event.nombre_evento}
              />
              <div className="containerEventDetails mx-auto">
                <p className="mt-3">
                  <strong>Descripción: </strong>
                  <span>{event.descripcion_evento}</span>
                  <br />
                  <strong>Fecha del evento: </strong>
                  <span>{new Date(event.fecha_evento).toDateString()}</span>
                </p>
              </div>
            </>
          ) : (
            <h1>No existe el evento</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
