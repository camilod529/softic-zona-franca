import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/store";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const user = useAppSelector((state) => state.user);

  switch (window.location.pathname) {
    case "/": {
      if (!user) {
        return <Navigate to="/login" />;
      }
      break;
    }

    case "/login": {
      if (user.rol != undefined) {
        return <Navigate to="/" />;
      }
      break;
    }

    case "/register": {
      if (user.rol !== 2) {
        return <Navigate to="/" />;
      }
      break;
    }

    default:
      break;
  }

  return children;
}
