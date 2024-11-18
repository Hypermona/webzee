import React from "react";
import Button from "./UI/button";
import { products } from "@/lib/data";
import StarRating from "./UI/StarRating";
import { getCategoryLabels } from "@/lib/utils";

function ProductDetails({ id }: { id: string }) {
  const product = products.find((pro) => String(pro.id) === id);
  const categoryLabel = getCategoryLabels(product?.category || []);
  return (
    <div className="flex">
      <div className="w-[600px] rounded-lg border border-gray-600 h-[80vh] mx-5 flex  flex-col justify-center items-center">
        <div className="h-[400px] w-[400px] rounded-xl bg-[#443e3e] flex-col flex justify-center items-center">
          <div>
            <p>{categoryLabel[0]}</p>
            <p>&gt; {categoryLabel[1]}</p>
          </div>
        </div>
        <div className="flex mt-3 gap-3 overflow-hidden">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-[100px] w-[100px] p-3 rounded-xl bg-[#443e3e] flex-col flex justify-center items-center"
              >
                <div>
                  <p className="break-words"> {product?.category[0]}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex w-[500px] flex-col gap-3 ml-10 mt-10">
        <div>
          <h2 className="text-5xl font-bold">{product?.productName}</h2>
          <p className="text-secondary text-lg mb-1">by {product?.creatorName}</p>
        </div>
        <div className="flex">
          <StarRating size={"large"} rating={product?.rating || 5} />
          {product?.rating}
        </div>

        <p className="font-bold text-3xl">
          $ {product?.price}
          <span className="text-lg text-secondary">
            <s> $ {(product?.price ?? 0 + 20).toFixed(2)}</s>
          </span>
          <span className="text-lg text-green-700"> 20% off</span>
        </p>
        <p>
          <strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sequi ad minus vel assumenda accusamus soluta doloribus laborum nulla debitis illo
          cupiditate iste velit at, repellat dolor? Nesciunt soluta voluptate nobis?
        </p>
        <Button variants="primary">Buy Now</Button>
        <Button variants="outlined">Add to cart</Button>
      </div>
    </div>
  );
}

export default ProductDetails;
