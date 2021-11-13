import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Menubar from "../../Shared/Menubar/Menubar";
import Product from "../Home/AllProducts/Product/Product";
import Motto from "../Home/Motto/Motto";

const Explore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Menubar></Menubar>
      <Motto></Motto>
      <div>
        <h1 className="text-center my-5">
          ___What we are <span className="text-info">offering right now</span>
          ___
        </h1>
        <div className="row g-5 card-group p-3 mx-0 products-cards">
          {products.map((item) => (
            <Product key={item?._key} item={item}></Product>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Explore;
