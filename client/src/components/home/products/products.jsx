import React, { useContext } from "react";
import { State } from "../../../States";
import Brand from "../brand/Brand";
import Category from "../category/Category";
import Country from "../country/Country";
import ProductItem from "../utils/ProductItem/ProductItem";

function products() {
  const state = useContext(State);

  const { product } = state.ProductApi.products;
  const { brand } = state.ProductApi.brands;
  const { category } = state.ProductApi.category;
  const { country } = state.ProductApi.country;

  return (
    <div className="home-page">
      {/* all product */}
      <div className="slider">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://picsum.photos/600/400?random=25"
                width="600"
                height="450"
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://picsum.photos/600/500?random=21"
                width="600"
                height="450"
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://picsum.photos/600/500?random=23"
                width="600"
                height="450"
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <h2>Products</h2>
      <div className="product my-4">
        {product.map((product) => {
          return <ProductItem key={product._id} product={product} />;
        })}
      </div>

      {/* product Brands */}
      <h2>Product Brands</h2>
      <div className="home-categores my-4">
        {brand.map((brand) => {
          return <Brand key={brand._id} brand={brand} />;
        })}
      </div>

      {/* Product Category */}
      <h2>Product Category</h2>
      <div className="home-categores right-style my-4">
        {category.map((category) => {
          return <Category key={category._id} category={category} />;
        })}
      </div>

      {/* Product Category */}
      <h2>Product Country</h2>
      <div className="home-categores my-4">
        {country.map((country) => {
          return <Country key={country._id} country={country} />;
        })}
      </div>
    </div>
  );
}

export default products;
