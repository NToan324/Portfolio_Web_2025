import { useEffect } from "react";
import Introduce from "../../components/Introduce/Introduce";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const IntroduceView = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/portfolio");
    }, 5000);
  });
  return (
    <Layout>
      <Introduce />
    </Layout>
  );
};

export default IntroduceView;
