import {useState, useEffect} from 'react'
const API_BASE_URL = "http://localhost:5000";

function ProductApi() {
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        fetch(`${API_BASE_URL}/api/product/products`, {
            method: "GET",
            headers: {"Content-type": "application/json;charset=UTF-8"}
        }).then(res => res.json())
        .then(data => {
            setProduct(data.productAll.products)
        }).catch(err => {
            console.log(err);
        });

    }, [])

  return {
     products: {product, setProduct}
  }
}

export default ProductApi
