import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom";
// import App from "./App.tsx";
import "./index.css";
import { router } from "./Routes/Routes.tsx";
import { RouterProvider } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     {/* <App router={router} /> */}
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
import { BrowserRouter } from "react-router-dom";
// const rootElement = document.getElementById("root");
// if (!rootElement) throw new Error("failed to find the root");

// const root = ReactDOM.createRoot(rootElement);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// // Render the component into the root container
// ReactDOM.render(<App />, rootElement);
