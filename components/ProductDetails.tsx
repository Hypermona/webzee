import React from "react";
import Button from "./UI/button";
import { products } from "@/lib/data";
import StarRating from "./UI/StarRating";
import { getCategoryLabels } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

function ProductDetails({ id }: { id: string }) {
  const product = products.find((pro) => String(pro.id) === id);
  const categoryLabel = getCategoryLabels(product?.category || []);
  const similerProducts = products.filter(
    (prd) => prd.category[0] === prd.category[0] && prd.category[1] === prd.category[1]
  );
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-[90vw] sm:w-[600px] py-2 rounded-lg border border-gray-600 h-[80vh] m-2 sm:mx-5 flex  flex-col justify-center items-center">
        <div className="h-[400px] w-[70vw] sm:w-[400px] rounded-xl bg-[#443e3e] flex-col flex justify-center items-center">
          <div>
            <p>{categoryLabel[0]}</p>
            <p>&gt; {categoryLabel[1]}</p>
          </div>
        </div>
        <div className="flex items-center mt-3 gap-3 overflow-hidden w-[80vw] sm:w-[400px] ">
          <ChevronLeft />
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
          <ChevronRight />
        </div>
      </div>
      <div className="flex sm:w-[500px] flex-col gap-3 m-2 sm:ml-10 mt-10">
        <div>
          <h2 className="text-5xl font-bold">{product?.productName}</h2>
          <p className="text-secondary text-lg mb-1">by {product?.creatorName}</p>
        </div>
        <div className="flex text-2xl items-baseline">
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

        <div className="my-10">
          <p className="text-2xl fonr-bold tracking-tight  my-2">Buy Similar Products</p>
          <div className="w-[90vw] flex gap-2 sm:gap-3 flex-wrap">
            {similerProducts.slice(0, 3).map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
