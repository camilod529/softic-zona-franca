import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
{
  /*import { createEvent } from "../api/session";*/
}
import { Navbar } from "../components";
import Footer from "../components/Footer";

export const CreatePrizePage = () => {
  //   const [data, setData] = useState({
  //     id_premio: 0,
  //     nombre_premio: "",
  //     descripcion_premio: "",
  //     foto_premio: null,
  //     fecha_premio: new Date(),
  //     fecha_premio_fin: new Date(),
  //     aforo_maximo: 0,
  //     aforo_registrado: 0,
  //     puntos_colaborador: 0,
  //     puntos_empresa: 0,
  //     puntos_castigo: 0,
  //   });
  //   const navigate = useNavigate();

  //   const onChange = (e: FormEvent<HTMLInputElement>) => {
  //     setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
  //   };

  {
    /*const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    await createEvent({
      id_premio: data.id_premio,
      nombre_premio: data.nombre_premio,
      descripcion_premio: data.descripcion_premio,
      foto_premio: data.foto_premio,
      fecha_premio: data.fecha_premio,
      fecha_premio_fin: data.fecha_premio_fin,
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
             
              <label htmlFor="nombre_premio">Nombre del Premio</label>
              <input
                type="text"
                name="nombre_premio"
                id="nombre_premio"
                placeholder="Escriba el nombre del premio"
                // onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="descripcion_premio">Descripcion del Premio</label>
              <input
                type="text"
                name="descripcion_premio"
                id="descripcion_premio"
                placeholder="Escriba la descripcion"
                // onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="precio">Precio</label>
              <input
                min={0}
                type="number"
                name="precio"
                id="precio"
                placeholder="Precio del premio"
                // onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="foto_premio">Foto</label>
              <input
                type="file"
                name="foto_premio"
                id="foto_premio"
                placeholder="Ingrese la foto del premio"
                // onChange={onChange}
              />{" "}
              <br />
              <button
                className="btn btn-primary green-btn mt-3"
                style={{
                  width: '30%',
                  border: "solid",
                  borderColor: "black",
                  borderWidth: "1px",
                  color: "black",
                }}
              >
                Crear premio
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
