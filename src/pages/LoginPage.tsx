import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

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

    await login({ email: parseInt(data.nick), password: data.contrasena })
      .then((res) => {
        navigate("/profile");
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <div className="card login-card">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAADX19fx8fE4ODi4uLi8vLwXFxdPT0/FxcX5+fmHh4fm5ubi4uKMjIz09PRvb29DQ0OYmJh1dXVaWlrOzs7b29uCgoJKSkrk5OQ+Pj5hYWHr6+vLy8ulpaUzMzMqKioeHh4LCwt7e3uwsLChoaElJSVUVFQaGhrhJeGEAAAFGUlEQVR4nO2Y65aqOBCFAQUBIXIXBW946fP+TzhQISHBXt1ti2ecWfv7xaWS1CZJVQXDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/0VmVkvxyhGKboTZK0f4GsdcLJr4lQ6cFouF6bxwgG+wzZb5KxV2A0DhKyGFh/+zwl3sumW0euEI/7bC1/N3FdaBY3vBl2tyFuxsp6g/feM4sq1fF7YVfDL3deDZhfpirNCvA2sXfO3Eb9mlNxrusB4EWEvGWCIdCpMDmZzSnTRZdxa+wd/clvTMy8is3Pc2Aeto259P9CJmssuRwn3W0JN5Ek6tLyzNAeb3TynSHPsP6qeKSRYoLh6KRjw/FYYfSau+qUU3BlPaXz5TeFEMzFQ4MQ27hdq56aoK+2wRfGgmh3xw8XQYnpdGpFh90GRZC5pfrX1yr/CsGZgfgTEdhTmiulPox2ObenBRJbsXQgqbkZ03VpiMeyqnm8UZ34HVPtzkaz6b67HCih5vE2tTXLd0Hfuqwoilg4b5kvVCKZlacoVkjJ1v/XWgK7SFyZJVjfadJ2CtfEkj5JOV6wpzerjkX3XF19N+UDjvyvNa7OUuNvn5Qk6VUOiGXftZonxEOXI95yZ5a+IH3CMzn0oh9Wbrt5GukDYXkyZ0O19JhXzLhH+Gpm1clN73CiPR2qPbY60q5FEmEwsz0Vs8yUV+0c6bS7/hNIV1dyH2RW3zJUueacuJR1tx3KKbq1QY+/qIQ/Pu4igH5fB49Vnm/QUU5Cj/BPtMbhlHVejQ4utMZk51FCapMZp/8vwk3KIIu5QKL8qQpnilS90PFqF88zx+FxQWMyNIKnMgDVWFlMraLXVJlbSSecIzr+9KP4u4ukI1MtJku4pCSpkLa7BY0aZmxhTMum/dsOPgesyskce0Zs7uYHJM+yn5uUJ1TE+sSaHQ0VrKjzDNRpxtTZV4XXShMMhVj1PN5BB5nS/17tcKnU8Vaue083QKfXVxspwC+jWjBSI9VuuRyCFH7KiRLj6skPqbG6NVelJ+Cfkf061SWS+6rB+BPp+teuyJxbnu9z49kJHmRwrvIk1kjCONYlJoHT8JryYieahZUfJdGeNsYW6Hv2KR5tmPFJbDGuTZwlYVUuD9MzjFs8VUpSl1VspbmtNY95gGPEofaVHdgocUmmfROqT7xlIV8vogFSZXuq2mqkz7AoJ75vO7UdXW1+aBooRvkgcUmiXtAp97z9VIhSt+PtnSyXPyqs3nBeU22QQFi+Ue0TzmpejpbAUbm2cN/vwRhWbzsWaRCN0bTaGsvN2qyvrifLrKuz+iKmxnY4/vT088Zz6kUOUyNOfRKx1bHNXk8bTEky6wvvd4pR/8ml7VzxXq7ZnSvI/PkWZgxtP+4wuU7puz6Fv3eKlWbKLAulco83apKwyVpHqz1ebyL8ZtsDCjaf9itOTidBcNeXf0z7voA4BZDhXx3G0REUH/v3ou27u9VLgxLLHSmTwzZG3rWGa9OhEaz5MFGV2k4zjaP677ajG0HWdnPEg/h93lznHszVe2K2/sxEuhxOE+vR8UhW8Gj5/p94bf8K4K8z2PLNene3pXhSK6P5+V3lVhpSWuZ3hrhYfL94bfwkum91OYVBXbTVI4+UHLZvIMDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwGv5B5iXOMnxpywgAAAAAElFTkSuQmCC"
          className="card-img-top login-logo"
          alt="..."
        />
        <div>
          <strong>Fecha del evento: </strong><br /><br />
          <strong>Lugar: </strong><br /><br />
          <p>Descripción</p><br /><br />
        </div>
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
