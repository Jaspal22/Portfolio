import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NewApp from "./NewYear";

const renderNewYear = true; // Toggle this value to switch between `App` and `NewApp`

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <NewApp />
  </React.StrictMode>
);

//  <App />
//  {renderNewYear ? <NewApp /> : <App />}


// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import NewApp from "./NewYear";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <NewApp />
//   </React.StrictMode>
// );
