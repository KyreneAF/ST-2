import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu/Menu.tsx";
import RegularMenu from "./Components/RegularMenu/RegularMenu.tsx";
import SpikedMenu from "./Components/SpikedMenu/SpikedMenu.tsx";
import Splash from "./Components/Splash/Splash.tsx";
import AboutUs from "./Components/AboutUs/AboutUs.tsx";
import { Outlet } from "react-router";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Splash />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/regular-menu" element={<RegularMenu />} />
          <Route path="/spiked-menu" element={<SpikedMenu />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<Splash />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

function App() {
  return (
    <div className="app-container">
      <div className="navigation-container">
        <Navigation />
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
