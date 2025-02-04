import Home from "../../components/Home/home";
import Introduction from "../../components/Introduction/Introduction";
import Header from "../../components/Header/header";
import About from "../../components/About/about";
import PortfolioShowCase from "../../components/PortfolioShowCase/portfolioShowCase";

const HomePage = () => {
  return (
    <div className="transition_bg w-full h-full px-6">
      <Introduction />
      <Header />
      <Home />
      <About />
      <PortfolioShowCase />
    </div>
  );
};

export default HomePage;
