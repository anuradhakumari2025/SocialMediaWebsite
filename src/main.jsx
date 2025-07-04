import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const router = createBrowserRouter([{ 
  path: "/", 
  element: <App /> }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  //use of router
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
);
