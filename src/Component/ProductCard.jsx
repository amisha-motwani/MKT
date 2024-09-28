import React from "react";
import BASE_URL from "../API/Api";

function ProductCard({ product, onClick }) {
  return (
    <>
      <div
        className="w-[310px] border-1 border-gray-300 my-3 rounded-lg cursor-pointer"
        onClick={onClick}
      >
        <div className="w-[100%] rounded-lg">
          <img
            className="w-[100%] h-[350px] rouded-lg"
            src={`${BASE_URL}/${product.image.split(", ")[0]}`}
            alt={product.image}
          />
        </div>
        <hr />
        <div className="d-flex justify-content-center mt-2 text-Black">
          <b className="text-center">{product.price}</b>
        </div>
        <div className="d-flex justify-content-center mt-2 text-light bg-[#000000]">
          <b className="text-center">{product.title}</b>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
