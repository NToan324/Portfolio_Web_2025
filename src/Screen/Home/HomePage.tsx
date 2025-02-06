import Home from "../../components/Home/home";
import Introduction from "../../components/Introduction/Introduction";
import Header from "../../components/Header/header";
import About from "../../components/About/about";
import PortfolioShowCase from "../../components/Portfolio/portfolioShowCase";
import Contact from "../../components/Contact/contact";

const HomePage = () => {
  return (
    <div className="transition_bg w-full h-full px-6">
      <Introduction />
      <Header />
      <Home />
      <About />
      <PortfolioShowCase />
      <Contact />
    </div>
  );
};

export default HomePage;
