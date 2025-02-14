import Home from "../Home/Home";
import Header from "../../components/Header/Header";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Layout from "../../components/Layout/Layout";
const LandingPage = () => {
  return (
    <Layout>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default LandingPage;
