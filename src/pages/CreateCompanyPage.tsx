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
      <div className="container-adminEmp">
      <div className="content-container titulo">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-"></div>
              <div className="col-md">
              <form className="login-form mr-4" onSubmit={handleSubmit}>
        <label htmlFor="nit">nit</label>
        <input
          type="text"
          name="nit"
          id="nit"
          placeholder="Escriba su nit"
          onChange={onChange}
        />{" "}
        <br />
        <br />
        <label htmlFor="name">Contraseña</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Escriba el nombre de la compañia"
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
      <Footer/>
    </main>
    
  );
};
