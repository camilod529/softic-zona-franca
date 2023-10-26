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
      <Navbar />
      <img
        src="https://www.zonafrancasantander.com/imagenes//vco_secciones/secc_a3e99dc8bef438dc841961034d5b9f04032c72f3.jpg"
        className="img-fluid banner"
      />

      <div className="row justify-content-md-center">
        <div className="col col-lg-2"></div>
        <div className="col-md-auto">
          <main>
            <form className="colaborator-form mr-4" onSubmit={handleSubmit}>
              <label htmlFor="documento_colaborador">NIT de la empresa</label>
              <input
                style={{
                  border: "solid",
                  borderColor: "black",
                  borderWidth: "1px",
                }}
                type="text"
                name="documento_colaborador"
                id="documento_colaborador"
                placeholder="Escriba el nit de la empresa"
                onChange={onChange}
              />{" "}
              <br />
              <br />
              <label htmlFor="empresa_colaborador">Nombre</label>
              <input
                style={{
                  border: "solid",
                  borderColor: "black",
                  borderWidth: "1px",
                }}
                type="text"
                name="empresa_colaborador"
                id="empresa_colaborador"
                placeholder="Escriba el nombre de la empresa"
                onChange={onChange}
              />{" "}
              <br />
              <label htmlFor="nombre_1">Oficina</label>
              <input
                style={{
                  border: "solid",
                  borderColor: "black",
                  borderWidth: "1px",
                }}
                type="text"
                name="nombre_1"
                id="nombre_1"
                placeholder="Escriba la o las oficinas de la empresa"
                onChange={onChange}
              />{" "}
              <br />
              <button
                className="btn btn-primary"
                style={{
                  border: "solid",
                  borderColor: "black",
                  borderWidth: "1px",
                  color: "black",
                }}
              >
                Añadir empresa
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
