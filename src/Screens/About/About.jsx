import React from "react";
import AppRouter from "../../config/App Router/AppRouter";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const navigateBtn = (path) => {
    navigate(path);
  };
  return <>
        <button onClick={()=>navigateBtn("/")}>Home</button>
      <button onClick={()=>navigateBtn("/about")}>About</button>
      <button onClick={()=>navigateBtn("/products")}>Products</button>
      <h1>This Is About Page</h1>
  </>
};

export default About;
