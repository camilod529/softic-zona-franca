import { FormEvent, useState } from "react";
import { createCompany } from "../api/session";
import { useNavigate } from "react-router-dom";

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
    </main>
  );
};
