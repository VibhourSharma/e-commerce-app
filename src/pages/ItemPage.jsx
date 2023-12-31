import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const ItemPage = () => {
  const URL =
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const { id } = useParams();

  const categoryWithProduct = data.top_products.find((category) =>
    category.products.find((product) => product.id === +id)
  );

  const productDetails = categoryWithProduct?.products.find(
    (product) => product.id === +id
  );

  return (
    <div className="w-full flex items-center justify-center font-default">
      <div className="w-[73%] flex">
        <div className="h-[50%] w-[50%]">
          <img src={URL} alt="category id" />
        </div>
        <div className="w-[70%] mt-8 ml-12">
          <div className="flex flex-col">
            <span className="tracking-wide text-lg">{productDetails.name}</span>
            <span className="text-lg mt-1">{productDetails.base_qty}</span>
            <span className="text-lg font-bold mt-2">$53</span>
          </div>
          <div className="flex justify-between items-center mt-8">
            <button className="border border-blue-600 p-3.5 text-blue-500 w-[47%] rounded-lg">
              Add To Bag
            </button>
            <button className="bg-blue-600 text-white p-3.5 w-[47%] rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
