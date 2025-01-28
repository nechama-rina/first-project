import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const ProductList = () => {
    const products=useSelector(state=> state.products);
    return(
        <div>
        <h1>Products in Order</h1>
        <h2>the change i want to do its to call the order titel nechma rina order</h2>
        {products.length === 0 ? (
        <p>No products available</p>) : (
            products.map((product, index) => (
          <Product
            key={index}
           product={product}
          />
        ))
      )}
        </div>
    )
}

export default ProductList;
