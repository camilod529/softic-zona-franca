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
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_37d4bbfbf2565771790085cdc4767c80413274bd.jpg"
        className="img-fluid banner"
      />
      <div className="">
        <div className="container titulo">
          {event.id_evento !== 0 ? (
            <>
              <h1 className="text-center mt-5 mb-5 display-2">
                {event.nombre_evento}
              </h1>
              <div className="row">
                <div className="col m-3">
                  <img
                    src={event.foto_evento}
                    className="img-fluid"
                    alt={event.nombre_evento}
                  />
                </div>
                <div className="col">
                  <h3 className="m-3">Fecha:</h3>
                  <h5 className="m-3">
                    {new Date(event.fecha_evento).toDateString()}
                  </h5>
                  <h3 className="m-3">Descripcion:</h3>
                  <h5 className="m-3">{event.descripcion_evento}</h5>
                  <h3 className="m-3">Etiquetas:</h3>
                </div>
              </div>
              <div className="container text-center">
                <div className="row justify-content-md-center m-5">
                  <div className="col col-lg-2"></div>
                  <div className="col-md-auto">
                    <form>
                      <fieldset className="text-center">
                        <h1> Pre-registrate aqui</h1>
                        <div className="mb-3 formSpace">
                          <label className="form-label"></label>
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Cedula"
                          />
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </fieldset>
                    </form>
                  </div>
                  <div className="col col-lg-2"></div>
                </div>
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
