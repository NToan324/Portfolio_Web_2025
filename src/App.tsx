import LandingPage from "./Screen/LandingPage/landingPage";
import Introduce from "./Screen/Introduce/Introduce";
import Project from "./Screen/Project/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/portfolio" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/project/:name" element={<Project />} />
        <Route path="*" element={<h1 className="text-white">Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
