// import Navbar from "./components/Navbar";
import NewComp from "./components/newYearComp";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

function NewApp() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<NewComp />} />
                <Route path="/portfolio" element={<App />} />
            </Routes>
    </Router>
    
  );
}

export default NewApp;

// function NewApp() {
//     return (
//         <BrowserRouter>

//         <NewComp />
//       </BrowserRouter>
      
//     );
//   }
  
//   export default NewApp;

// <Navbar />

// import Navbar from "./components/Navbar";
// import NewComp from "./components/newYearComp";
// import { BrowserRouter } from "react-router-dom";




// function NewApp() {
//   return (
    
//       <BrowserRouter>
//         <Navbar />
//         <Body>
//           <NewComp/>
//         </Body>
//       </BrowserRouter>
    
//   );
// }

// export default NewApp;
