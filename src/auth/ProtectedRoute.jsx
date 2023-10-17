import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/store";

export function ProtectedRoute({ children }) {
  const user = useAppSelector((state) => state.user);

  switch (window.location.pathname) {
    case "/": {
      if (!user) {
        return <Navigate to="/login" />;
      }
      break;
    }

    case "/login": {
      if (user.document != undefined) {
        return <Navigate to="/" />;
      }
      break;
    }

    case "/register": {
      if (user.role !== "empresa") {
        return <Navigate to="/" />;
      }
      break;
    }

    default: 
      break;
  }

  return children;
}
