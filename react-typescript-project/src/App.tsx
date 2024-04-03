import { Outlet } from "react-router";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
