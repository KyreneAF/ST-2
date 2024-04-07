import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Menu from "../Components/Menu/Menu.tsx";
import RegularMenu from "../Components/RegularMenu/RegularMenu.tsx";
import SpikedMenu from "../Components/SpikedMenu/SpikedMenu.tsx";
import Splash from "../Components/Splash/Splash.tsx";
// import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Splash />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "regular-menu",
        element: <RegularMenu />,
      },
      {
        path: "spiked-menu",
        element: <SpikedMenu />,
      },
    ],
  },
]);
