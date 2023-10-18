import { Navbar } from "./components";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};
