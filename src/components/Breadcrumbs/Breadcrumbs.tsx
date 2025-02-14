import React from "react";
import { useLocation, Link } from "react-router-dom";
const Breadcrumbs = () => {
  const location = useLocation();
  let currentLocation = "";
  const patnames = location.pathname
    .split("/")
    .filter((path) => path !== "")
    .map(
      (path) => (
        (currentLocation += "/" + path),
        (
          <Link to={currentLocation} key={path}>
            {decodeURIComponent(path)}
          </Link>
        )
      )
    );

  return <div className="text-white">{patnames}</div>;
};

export default Breadcrumbs;
