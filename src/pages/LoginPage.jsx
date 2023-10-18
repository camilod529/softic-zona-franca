import { useState } from "react";
import { Link } from "react-router-dom";

import { login } from "../api/session";
import { useUserActions } from "../hooks/useUserActions";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [data, setData] = useState({ nick: "", contrasena: "" });
  const { setUser } = useUserActions();
  const navigate = useNavigate();

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(data)
      .then((res) => {
        navigate("/profile");
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <h1>INGRESA A NUESTRA ZONA PRIVADA Y CONOCE INFORMACIÓN PERSONALIZADA.</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Usuario</label>
        <input
          type="text"
          name="nick"
          id="email"
          placeholder="Escriba su correo"
          onChange={onChange}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="contrasena"
          id="password"
          placeholder="Escriba su contraseña"
          onChange={onChange}
        />

        <button>Ingresar</button>
      </form>

      <Link to="/register">Registrarse</Link>
    </main>
  );
}
