import "./App.css";
import { BrowserRouter as Router , Route, Routes, Redirect } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
    
        <NavBar />
        <Routes>
          <Route path="/About" element= {<About />} />
          <Route path="/Projects" element= {<Projects />} />
          <Route path="/Contact" element= {<Contact />} />
        </Routes>
      
    </>
  );
}

export default App;
