// import React from "react";
// // import ReactDOM from "react-dom";
// import * as ReactDOM from "react-dom";
// import { createRoot } from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./Routes/Routes"; // Ensure correct import path

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// const domNode = document.getElementById("root");
// const root = createRoot(domNode);

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <RouterProvider router={router}>
//         {/* Your root component or any other components */}
//       </RouterProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./Routes/Routes"; // Ensure correct import path

// const rootElement = document.getElementById("root");

// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);

//   root.render(
//     <React.StrictMode>
//       {/* <BrowserRouter> */}
//       <RouterProvider router={router}>
//         {/* Your root component or any other components */}
//       </RouterProvider>
//       {/* </BrowserRouter> */}
//     </React.StrictMode>
//   );
// } else {
//   console.error("Root element not found");
// }
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Menu from "./Components/Menu/Menu.tsx";
import RegularMenu from "./Components/RegularMenu/RegularMenu.tsx";
import SpikedMenu from "./Components/SpikedMenu/SpikedMenu.tsx";
import Splash from "./Components/Splash/Splash.tsx";
import AboutUs from "./Components/AboutUs/AboutUs.tsx";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Splash />} />
          <Route path="menu" element={<Menu />} />
          <Route path="regular-menu" element={<RegularMenu />} />
          <Route path="spiked-menu" element={<SpikedMenu />} />
          <Route path="about" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
