import LandingPage from "./Screen/LandingPage/landingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
