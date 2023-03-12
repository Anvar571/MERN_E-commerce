import React from "react";

function Country({country}) {
  return (
      <div className="country-body">
        <img src="https://picsum.photos/300/400?random=12" alt="" />
        <div className="box-detail">
          <div className="country-body">
            <h2>{country.name}</h2>
          </div>
        </div>
      </div>
  );
};

export default Country;
