import { Outlet } from "react-router";
import NavBar from "./Components/NavBar/NavBar";
import useBodyBackground from "./Components/useBodyBackground";

function App() {
  useBodyBackground();
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
