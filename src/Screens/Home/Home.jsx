import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateBtn = (path) => {
    navigate(path);
  };

  return (
    <>
      <button onClick={() => navigateBtn("/")}>Home</button>
      <button onClick={() => navigateBtn("/about")}>About</button>
      <button onClick={() => navigateBtn("/products")}>Products</button>
      <h1>This Is Home Page</h1>
    </>
  );
};

export default Home;
