import { FormEvent, useState } from "react";

import { login } from "../api/session";
import { useUserActions } from "../hooks/useUserActions";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [data, setData] = useState({ nick: "", contrasena: "" });
  const { setUser } = useUserActions();
  const navigate = useNavigate();

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login({ email: data.nick, password: data.contrasena })
      .then((res) => {
        navigate("/profile");
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <div className="card login-card">
        <form className="login-form mr-4" onSubmit={handleSubmit}>
          <label htmlFor="email">Usuario</label>
          <input
            type="text"
            name="nick"
            id="email"
            placeholder="Escriba su correo"
            onChange={onChange}
          />{" "}
          <br />
          <br />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="contrasena"
            id="password"
            placeholder="Escriba su contraseña"
            onChange={onChange}
          />{" "}
          <br />
          <button className="btn btn-primary mt-3">Ingresar</button>
        </form>
      </div>
    </main>
  );
}
