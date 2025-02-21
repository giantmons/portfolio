
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import Splashscreen from "./pages/Splashscreen";



function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={ <Splashscreen/> }/>
        <Route path="/home" element={ <Home/> }/>
        <Route path="/certifications" element={ <Certifications/> }/>
        <Route path="/projects" element={ <Projects/> }/>
      </Routes>
    </Router>
    </>
  );
}

export default App;