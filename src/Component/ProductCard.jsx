import React from "react";
import BASE_URL from "../API/Api";

function ProductCard({ product, onClick }) {
  return (
    <>
      <div
        className="md:w-[260px] sm:w-[200px] w-[150px]  shadow-2xl border-gray-300 my-3 rounded-lg cursor-pointer"
        onClick={onClick}
      >
        <div className="w-[100%] rounded-lg">
          <img
            className="w-[100%] md:h-[280px] sm:h-[200px] h-[160px] ProductCard_image"
            src={`${product.image.split(", ")[0]}`}
            alt={product.image}
          />
        </div>
        <h1 className="text-center md:text-lg sm:text-md text-sm overflow-hidden bg-[#f2f1ed] line-clamp-2 md:px-3 px-1 md:h-[55px] text-gray-700"><strong>{product.title}</strong></h1>
        <hr className="w-[60%] mx-auto" />
        <h1 className="text-center md:text-lg sm:text-md text-sm bg-[#f2f1ed] text-gray-700 pb-1" >{product.price}/-</h1>
       
      </div>
    </>
  );
}

export default ProductCard;
