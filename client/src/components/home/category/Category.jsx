import React from "react";

function Category({category}) {
  return (
      <div className="category-body">
        <img src="https://picsum.photos/300/400?random=3"  alt="" />
        <div className="box-detail">
          <div className="category-body">
            <h2>{category.name}</h2>
          </div>
        </div>
      </div>
  );
}

export default Category;
