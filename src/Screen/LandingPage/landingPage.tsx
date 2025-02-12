import Home from "../Home/Home";
import Header from "../../components/Header/Header";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Introduce from "../../components/Introduce/Introduce";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  }, []);

  return (
    <div className="transition_bg w-full min-h-screen">
      <Introduce />
      <div className={loading ? "block" : "hidden"}>
        <Header />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
