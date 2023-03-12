import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <Link to={`detail/${product._id}`}>
      <div className="product_card">
        <img src={product.images.url} alt="" />
        <div className="product_box">
          <h2 title={product.title}>{product.title}</h2>
          <mark >${product.price}</mark>
          <p>{product.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
