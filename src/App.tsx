import { Route, Routes } from "react-router";
// import NavBar from "./Components/NavBar/NavBar";
import useBodyBackground from "./Components/useBodyBackground";
import Destination from "./Pages/Destination/Destination";
import Crew from "./Pages/Crew/Crew";
import Technology from "./Pages/Technology/Technology";
import Home from "./Pages/Home/Home";
// import ErrorPage from "./ErrorPage";

function App() {
  useBodyBackground();
  const BASE_URL = /SpaceTourismWebsite/;
  return (
    <Routes>
      <Route path={`${BASE_URL}`} element={<Home />} />
      <Route path={`${BASE_URL}destination`} element={<Destination />} />
      <Route path={`${BASE_URL}crew`} element={<Crew />} />
      <Route path={`${BASE_URL}technology`} element={<Technology />} />
      {/* <Route path='*' element={<ErrorPage />} /> */}
    </Routes>
    // OLD VERSION
    // <>
    // <NavBar/>
    // <Outlet />
    // </>
  );
}

export default App;
