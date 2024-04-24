import { Outlet } from "react-router-dom";
import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";

// function App() {
//   return (
//     <div className="App">
//       <div>
//         <Navigation />
//       </div>
//       <div>
//         <Outlet />
//       </div>
//     </div>
//   );
// }
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
