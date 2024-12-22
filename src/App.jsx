
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/Certifications" element={ <Certifications/> }/>
        <Route path="/Projects" element={ <Projects/> }/>
      </Routes>
    </Router>
  );
}

export default App;