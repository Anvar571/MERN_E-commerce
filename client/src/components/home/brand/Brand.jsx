import React from "react";

function Brand({brand}) {
  return (
      <div className="brand-body">
        <img src="https://picsum.photos/300/400?random=6" height="150" alt="" />
        <div className="box-detail">
          <div className="brand-body">
            <h2>{brand.name}</h2>
          </div>
        </div>
      </div>
  );
}

export default Brand;
