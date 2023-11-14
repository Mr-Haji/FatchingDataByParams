import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Cards/Card";
import { useNavigate, useParams } from "react-router-dom";
import SingleProductPage from "../../components/Single Product Page/SingleProductPage";
import { Skeleton } from "@mui/material";

const Products = () => {
  let { id } = useParams();

  // console.log(id);
  const navigate = useNavigate();
  const navigateBtn = (path) => {
    navigate(path);
  };

  const [productData, setProductData] = useState([]);
  const [loder, setloder] = useState(false);
  console.log(loder);
  const getData = async () => {
    const productLink = "https://fakestoreapi.com/products";
    const productLinkWithId = "https://fakestoreapi.com/products/" + id;

    await axios
      .get(id ? productLinkWithId : productLink)
      .then((response) => {
        setloder(true);
        setProductData(id ? [response.data] : response.data);
      })
      .catch((error) => {
        return console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    loder ?( <>
      <button onClick={() => navigateBtn("/")}>Home</button>
      <button onClick={() => navigateBtn("/about")}>About</button>
      <button onClick={() => navigateBtn("/products")}>Products</button>
      <h1>This Is Products Page</h1>
      {productData.map((e, i) => {
        return id ? (
          <div key={i}>
            <SingleProductPage
              key={i}
              title={e.title}
              category={e.category}
              price={e.price}
              description={e.description}
              rating={e.rating.rate}
              image={e.image}
              review={e.rating.count}
            ></SingleProductPage>
          </div>
        ) : (
          <div key={i}>
            <Card
              title={e.title}
              category={e.category}
              description={e.description}
              image={e.image}
              price={e.price}
              rating={e.rating.count}
              lastButton={"Add To Cart"}
              // onClick = {}
            />
          </div>
        );
      })}
    </>):(  <Skeleton variant="rectangular" width={500} height={700} />
    )   
   
  );
};

export default Products;
