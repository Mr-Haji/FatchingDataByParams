import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Skeleton, Stack } from "@mui/material";
import SingleProductPage from "../../components/Single Product Page/SingleProductPage";

const ProductDetailedPage = () => {
  const navigate = useNavigate();
  const navigateBtn = (path) => {
    navigate(path);
  };

  let { id } = useParams();
  const [productData, setProductData] = useState([]);
  const [loder, setloder] = useState(false);
  console.log(loder);
  const getData = async () => {
    const productLinkWithId = `https://fakestoreapi.com/products/${id}`;

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
  return loder ? (
    <>
      <button onClick={() => navigateBtn("/")}>Home</button>
      <button onClick={() => navigateBtn("/about")}>About</button>
      <button onClick={() => navigateBtn("/products")}>Products</button>
      <h1>This Is Products Page</h1>
      {productData.map((e, i) => {
        return (
          <Stack
            sx={{
              // padding:"2px",
              margin: "5px",
            }}
            key={i}
          >
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
          </Stack>
        );
      })}
    </>
  ) : (
    <Skeleton variant="rectangular" width={500} height={700} />
  );
};

export default ProductDetailedPage;
