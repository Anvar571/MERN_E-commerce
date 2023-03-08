import React, { useContext } from "react";
import { State } from "../../../States";
import ProductItem from "../utils/ProductItem/ProductItem";

function products() {
  const state = useContext(State);

  const { product } = state.ProductApi.products;
    console.log(product);
  return (
    <div className="product">
        {
            product.map(product => {
                return <ProductItem key={product._id} product={product}/>
            })
        }
    </div>
  )
}

export default products;
