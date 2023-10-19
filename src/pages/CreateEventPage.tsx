import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../api/session";
import { Navbar } from "../components";
import Footer from "../components/Footer";

export const CreateEventPage = () => {
  const [data, setData] = useState({
    id_evento: 0,
    nombre_evento: "",
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    await createEvent({
      id_evento: data.id_evento,
      nombre_evento: data.nombre_evento,
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
        navigate("/adminEmpresa");
      })
      .catch((err) => console.log(err));
  };
  return (
    <main>
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes/vdo_cabezotes/cabe_93d666c2e538322a27e6562c19bc5597a2066bd6.jpg"
        className="contenido img-fluid"
      />
      <img
        src="https://i.imgur.com/9PDGhjx.jpg"
        className="contenido-alternativa img-fluid contenido "
      />
      <div className="container-adminEmp">
        <div className="content-container titulo">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-"></div>
              <div className="col-md">
                <form className="login-form mr-4" onSubmit={handleSubmit}>
                  <label htmlFor="nit">id evento</label>
                  <input
                    type="text"
                    name="id_evento"
                    id="id_evento"
                    placeholder="Escriba el id del evento"
                    onChange={onChange}
                  />{" "}
                  <br />
                  <br />
                  <label htmlFor="nombre_evento">nombre evento</label>
                  <input
                    type="text"
                    name="nombre_evento"
                    id="nombre_evento"
                    placeholder="Escriba el nombre del evento"
                    onChange={onChange}
                  />{" "}
                  <br />
                  <label htmlFor="descripcion_evento">Descripcion evento</label>
                  <input
                    type="text"
                    name="descripcion_evento"
                    id="descripcion_evento"
                    placeholder="Escriba la descripcion"
                    onChange={onChange}
                  />{" "}
                  <br />
                  <label htmlFor="foto_evento">Foto evento</label>
                  <input
                    type="file"
                    name="foto_evento"
                    id="foto_evento"
                    placeholder="Ingrese la foto del eventos"
                    onChange={onChange}
                  />{" "}
                  <br />
                  <label htmlFor="fecha_evento">Fecha evento inicio</label>
                  <input
                    type="datetime-local"
                    name="fecha_evento"
                    id="fecha_evento"
                    placeholder="Ingrese la fecha del evento"
                    onChange={onChange}
                  />{" "}
                  <br />
                  <label htmlFor="fecha_evento_fin">Fecha evento fin</label>
                  <input
                    type="datetime-local"
                    name="fecha_evento_fin"
                    id="fecha_evento_fin"
                    placeholder="Ingrese la fecha final del evento"
                    onChange={onChange}
                  />{" "}
                  <br />
                  <label htmlFor="aforo_maximo">aforo maximo </label>
                  <input
                    min={1}
                    type="number"
                    name="aforo_maximo"
                    id="aforo_maximo"
                    placeholder="aforo maximo"
                    onChange={onChange}
                  />{" "}
                  <br />
                  <label htmlFor="aforo_registrado">aforo registrado</label>
                  <input
                    min={0}
                    type="number"
                    name="aforo_registrado"
                    id="aforo_registrado"
                    placeholder="aforo registrado"
                    onChange={onChange}
                  />{" "}
                  <br />
                  <label htmlFor="puntos_colaborador">puntos colaborador</label>
                  <input
                    min={0}
                    type="number"
                    name="puntos_colaborador"
                    id="puntos_colaborador"
                    placeholder="Ingrese los puntos a asignar al colaborador por asistir al evento"
                    onChange={onChange}
                  />{" "}
                  <br />
                  <label htmlFor="puntos_empresa">puntos empresa</label>
                  <input
                    min={0}
                    type="number"
                    name="puntos_empresa"
                    id="puntos_empresa"
                    placeholder="Ingrese los puntos a asignar a la empresa"
                    onChange={onChange}
                  />{" "}
                  <br />
                  <label htmlFor="puntos_castigos">puntos empresa</label>
                  <input
                    min={0}
                    type="number"
                    name="puntos_castigos"
                    id="puntos_castigos"
                    placeholder="Ingrese los puntos a asignar a la empresa"
                    onChange={onChange}
                  />{" "}
                  <br />
                  <button className="btn btn-primary mt-3">Ingresar</button>
                </form>
              </div>
              <div className="col-md-"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
