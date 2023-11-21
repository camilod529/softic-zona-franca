import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createColaborator } from "../api/session";
import { Navbar } from "../components";

export const CreateColaboradorPage = () => {
  const [data, setData] = useState({
    documento_colaborador: "",
    empresa_colaborador: "",
    nombre_1: "",
    apellido_1: "",
    genero: "",
    correo_personal: "",
    fecha_nacimiento: new Date(),
    foto: null as null | File,
  });
  const navigate = useNavigate();

  const onChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (e.currentTarget.name === "foto") {
      return setData({ ...data, foto: (e.currentTarget as HTMLInputElement).files![0] });
    }

    setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement | HTMLSelectElement>) => {
    e.preventDefault();
    await createColaborator({
      documento_colaborador: data.documento_colaborador,
      empresa_colaborador: data.empresa_colaborador,
      nombre_1: data.nombre_1,
      apellido_1: data.apellido_1,
      genero: data.genero,
      correo_personal: data.correo_personal,
      fecha_nacimiento: new Date(data.fecha_nacimiento),
      foto: data.foto,
    })
      .then((res) => {
        navigate("/admColaboradores");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_37d4bbfbf2565771790085cdc4767c80413274bd.jpg"
        className="img-fluid banner"
      />

      <div className="row justify-content-md-center">
        <div className="col col-lg-2"></div>
        <div className="col-md-auto">
          <main>
            <form className="colaborator-form mr-4" onSubmit={handleSubmit}>
              <label htmlFor="documento_colaborador">
                Documento Colaborador
              </label>
              <input
                type="text"
                name="documento_colaborador"
                id="documento_colaborador"
                placeholder="Escriba el documento del colaborador"
                onChange={onChange}
              />{" "}
              <br />
              <br />
              <label htmlFor="empresa_colaborador">
                NIT empresa colaborador
              </label>
              <input
                type="text"
                name="empresa_colaborador"
                id="empresa_colaborador"
                placeholder="Escriba el nit de la empresa del colaborador"
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="nombre_1">Primer Nombre</label>
              <input
                type="text"
                name="nombre_1"
                id="nombre_1"
                placeholder="Escriba el primer nombre del colaborador"
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="apellido_1">Primer Apellido</label>
              <input
                type="text"
                name="apellido_1"
                id="apellido_1"
                placeholder="Escriba el primer apellido del colaborador"
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="genero">Genero</label>
              <select
                id="genero"
                name="genero"
                aria-label="Seleccione el genero"
                onChange={onChange}
              >
                <option defaultChecked value="">Seleccione el genero</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>{" "}
              <br />
              <label htmlFor="correo_personal">Correo personal</label>
              <input
                type="text"
                name="correo_personal"
                id="correo_personal"
                placeholder="Escriba el correo personal del colaborador"
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="fecha_nacimiento">Fecha nacimiento</label>
              <input
                type="datetime-local"
                name="fecha_nacimiento"
                id="fecha_nacimiento"
                placeholder="Ingrese la fecha de nacimiento del colaborador"
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="foto">Foto</label>
              <input
                type="file"
                name="foto"
                id="foto"
                placeholder="Escriba el nit de la empresa del colaborador"
                onChange={onChange}
              />{" "}
              <br />
              <button
                className="btn btn-primary mt-3"
                style={{
                  border: "solid",
                  borderColor: "black",
                  borderWidth: "1px",
                  color: "black",
                }}
              >
                Crear colaborador
              </button>
            </form>
          </main>
        </div>
        <div className="col col-lg-2"></div>
      </div>
    </>
  );
};
