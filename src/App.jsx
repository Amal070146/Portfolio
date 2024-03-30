import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Homepage/Homepage";
import Gallery from "./pages/Gallery/Gallery";
import Projects from "./pages/Projects/Projects";
// import Nav from "./components/nav/nav";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
  ]);

  useEffect(() => {
    // Set CSS variables dynamically
    document.documentElement.style.setProperty("--color-primary", "#FD2E35");
  }, []);
  
  return <RouterProvider router={router} />;
}

export default App;
