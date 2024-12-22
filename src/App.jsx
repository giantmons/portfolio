
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import { Helmet } from 'react-helmet';



function App() {

  return (
    <>
    <Helmet>
        <title>Leuan Santos</title>
        <link rel="icon" type="image/png" href="/world.png" />
    </Helmet>
    <Router>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/Certifications" element={ <Certifications/> }/>
        <Route path="/Projects" element={ <Projects/> }/>
      </Routes>
    </Router>
    </>
  );
}

export default App;