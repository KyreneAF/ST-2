import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Menu from "../Components/Menu/Menu.tsx";
// import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "menu",
        element: <Menu />,
      },
    ],
  },
]);
