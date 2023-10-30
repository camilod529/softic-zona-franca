import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createAward } from "../api/session";
import { Navbar } from "../components";
import Footer from "../components/Footer";

export const CreatePrizePage = () => {
  const [data, setData] = useState({
    nombre_premio: "",
    detalles_premio: "",
    coste_premio: 0,
    foto: null as null | File,
  });
  const navigate = useNavigate();

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "foto") {
      const file = e.currentTarget.files?.[0];
      if (file) {
        setData({ ...data, foto: file });
      }
    } else {
      setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createAward(data)
      .then((res) => {
        console.log(res);
        navigate("/admPrizes");
      })
      .catch((err) => console.log(err));
  };

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
            <form className="colaborator-form mr-4" onSubmit={handleSubmit}>
              <label htmlFor="nombre_premio">Nombre del Premio</label>
              <input
                type="text"
                name="nombre_premio"
                id="nombre_premio"
                placeholder="Escriba el nombre del premio"
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="descripcion_premio">Descripcion del Premio</label>
              <input
                type="text"
                name="detalles_premio"
                id="descripcion_premio"
                placeholder="Escriba la descripcion"
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="precio">Precio</label>
              <input
                min={0}
                type="number"
                name="coste_premio"
                id="precio"
                placeholder="Precio del premio"
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="foto_premio">Foto</label>
              <input
                type="file"
                name="foto"
                id="foto_premio"
                placeholder="Ingrese la foto del premio"
                onChange={onChange}
              />{" "}
              <br />
              <button
                className="btn btn-primary green-btn mt-3"
                style={{
                  width: "30%",
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
