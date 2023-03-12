import {useState, useEffect} from 'react'
const API_BASE_URL = "http://localhost:5000";

function ProductApi() {
    const [product, setProduct] = useState([]);
    const [brand, setBrand] = useState([]);
    const [category, setCategory] = useState([]);
    const [populyar, setPopulyar] = useState([]);
    const [country, setCountry] = useState([]);

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

    useEffect(()=>{
        fetch(`${API_BASE_URL}/api/brand/all`, {
            method: "GET",
            headers: {"Content-type": "application/json;charset=UTF-8"}
        }).then(res => res.json())
        .then(data => {
            setBrand(data.brands)
        }).catch(err => {
            console.log(err);
        });
    }, [])
    
    useEffect(()=>{
        fetch(`${API_BASE_URL}/api/category/all`, {
            method: "GET",
            headers: {"Content-type": "application/json;charset=UTF-8"}
        }).then(res => res.json())
        .then(data => {
            setCategory(data.categorys)
        }).catch(err => {
            console.log(err);
        });
    }, [])

    useEffect(()=>{
        fetch(`${API_BASE_URL}/api/country/all`, {
            method: "GET",
            headers: {"Content-type": "application/json;charset=UTF-8"}
        }).then(res => res.json())
        .then(data => {
            setCountry(data.countrys)
        }).catch(err => {
            console.log(err);
        });
    }, [])

  return {
     products: {product, setProduct},
     brands: {brand, setBrand},
     category: {category, setCategory},
     country: {country, setCountry}
  }
}

export default ProductApi
