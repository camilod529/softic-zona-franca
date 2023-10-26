import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
{
  /*import { createEvent } from "../api/session";*/
}
import { Navbar } from "../components";
import Footer from "../components/Footer";

export const CreateEventPage = () => {
  const [data, setData] = useState({
    id_evento: 0,
    ID_evento: "",
    descripcion_evento: "",
    foto_evento: null,
    fecha_evento: new Date(),
    fecha_evento_fin: new Date(),
    aforo_maximo: 0,
    aforo_registrado: 0,
    puntos_colaborador: 0,
    puntos_empresa: 0,
    puntos_castigo: 0,
  });
  const navigate = useNavigate();

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
  };

  {
    /*const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    await createEvent({
      id_evento: data.id_evento,
      ID_evento: data.ID_evento,
      descripcion_evento: data.descripcion_evento,
      foto_evento: data.foto_evento,
      fecha_evento: data.fecha_evento,
      fecha_evento_fin: data.fecha_evento_fin,
      aforo_maximo: data.aforo_maximo,
      aforo_registrado: data.aforo_registrado,
      puntos_colaborador: data.puntos_colaborador,
      puntos_empresa: data.puntos_empresa,
      puntos_castigo: data.puntos_castigo,
    })
      .then(() => {
        navigate("/adminEventos");
      })
      .catch((err) => console.log(err));
  };*/
  }
  return (
    <main>
      <Navbar />

      <img
        src="https://i.imgur.com/9PDGhjx.jpg"
        className="contenido-alternativa img-fluid contenido "
      />
      <div className="row justify-content-md-center">
        <div className="col col-lg-2"></div>
        <div className="col-md-auto">
          <main>
            <form className="colaborator-form mr-4" /*onSubmit={handleSubmit}*/>
              {/* <label htmlFor="documento_colaborador">ID Evento</label>
              <input
                type="text"
                name="ID_evento"
                id="ID_evento"
                placeholder="Escriba el ID del evento"
                onChange={onChange}
              />{" "} */}
              <br />
              <label htmlFor="nombre_evento">Nombre del Evento</label>
              <input
                type="text"
                name="nombre_evento"
                id="nombre_evento"
                placeholder="Escriba nombre del evento"
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="nombre_1">Descripcion del Evento</label>
              <input
                type="text"
                name="descripcion_evento"
                id="descripcion_evento"
                placeholder="Escriba la descripcion del evento"
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="apellido_1">Banner</label>
              <input
                type="file"
                name="foto_evento"
                id="foto_evento"
                placeholder="Ingrese la foto del eventos"
                onChange={onChange}
              />{" "}
              <br />
              <br />
              <label htmlFor="genero">Fecha de inicio</label>
              <input
                type="datetime-local"
                name="fecha_evento"
                id="fecha_evento"
                placeholder="Ingrese la fecha del evento"
                onChange={onChange}
              />{" "}
              <br />
              <br />
              <label htmlFor="correo_personal">Fecha de cierre</label>
              <input
                type="datetime-local"
                name="fecha_evento_fin"
                id="fecha_evento_fin"
                placeholder="Ingrese la fecha final del evento"
                onChange={onChange}
              />{" "}
              <br />
              <br />
              <label htmlFor="fecha_nacimiento">Aforo Maximo</label>
              <input
                min={1}
                type="number"
                name="aforo_maximo"
                id="aforo_maximo"
                placeholder="Aforo maximo"
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="foto">Aforo registrado</label>
              <input
                min={0}
                type="number"
                name="aforo_registrado"
                id="aforo_registrado"
                placeholder="Aforo registrado"
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="foto">Puntos para Colaboradores</label>
              <input
                min={0}
                type="number"
                name="puntos_colaborador"
                id="puntos_colaborador"
                placeholder="Ingrese los puntos a asignar al colaborador por asistir al evento"
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="foto">Puntos a Empresas</label>
              <input
                min={0}
                type="number"
                name="puntos_empresa"
                id="puntos_empresa"
                placeholder="Ingrese los puntos a asignar a la empresa"
                onChange={onChange}
              />{" "}
              <button
                className="btn btn-primary mt-3 green-btn"
                style={{
                  width: "30%",
                  border: "solid",
                  borderColor: "black",
                  borderWidth: "1px",
                  color: "black",
                }}
              >
                Crear evento
              </button>
            </form>
          </main>
        </div>
        <div className="col col-lg-2"></div>
      </div>
      <Footer />
    </main>
  );
};
