import { FormEvent, useState } from "react";
import { createCompany } from "../api/session";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components";
import Footer from "../components/Footer";

export const CreateCompanyPage = () => {
  const [data, setData] = useState({ nit: "", name: "" });
  const navigate = useNavigate();

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    await createCompany({ nit: data.nit, name: data.name })
      .then(() => {
        navigate("/adminEmpresa");
      })
      .catch((err) => console.log(err));
  };
  return (
   
    <main>
      <Navbar/>
      <img
        src="https://www.zonafrancasantander.com/imagenes/vdo_cabezotes/cabe_93d666c2e538322a27e6562c19bc5597a2066bd6.jpg"
        className="contenido img-fluid"
      />
      <img
        src="https://i.imgur.com/9PDGhjx.jpg"
        className="contenido-alternativa img-fluid contenido "
      />
      <div className="row justify-content-md-center">
        <div className="col col-lg-2"></div>
        <div className="col-md-auto">
          <main>
            <form className="colaborator-form mr-4" onSubmit={handleSubmit}>
              <label htmlFor="documento_colaborador">
                NIT de la empresa
              </label>
              <input
                type="text"
                name="documento_colaborador"
                id="documento_colaborador"
                placeholder="Escriba el nit de la empresa"
                onChange={onChange}
              />{" "}
              <br />
              <br />
              <label htmlFor="empresa_colaborador">
                Nombre
              </label>
              <input
                type="text"
                name="empresa_colaborador"
                id="empresa_colaborador"
                placeholder="Escriba el nombre de la empresa"
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="nombre_1">Oficina</label>
              <input
                type="text"
                name="nombre_1"
                id="nombre_1"
                placeholder="Escriba la o las oficinas de la empresa"
                onChange={onChange}
              />{" "}
              <br />
              
              <button className="btn btn-primary mt-3">
                Añadir empresa
              </button>
            </form>
          </main>
        </div>
        <div className="col col-lg-2"></div>
      </div>
      <Footer/>
    </main>
    
  );
};
