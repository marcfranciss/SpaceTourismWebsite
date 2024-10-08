import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./Routes/Routes.tsx";
import App from "./App.tsx";
import NavBar from "./Components/NavBar/NavBar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div className='loader'></div>}>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <NavBar />
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
