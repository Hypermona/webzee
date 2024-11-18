import React from "react";
import Button from "./UI/button";

function ProductDetails() {
  return (
    <div className="flex">
      <div className="w-[600px] rounded-lg border border-gray-600 h-[80vh] mx-5 flex  flex-col justify-center items-center">
        <div className="h-[400px] w-[400px] rounded-xl bg-[#443e3e] flex-col flex justify-center items-center">
          <div>
            <p>Avatars</p>
            <p>&gt; Human-like</p>
          </div>
        </div>
        <div className="flex mt-3 gap-3">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-[100px] w-[100px] p-3 rounded-xl bg-[#443e3e] flex-col flex justify-center items-center"
              >
                <div>
                  <p>Avatars</p>
                  <p>&gt; Human-like {i + 1}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex w-[500px] flex-col gap-3 ml-10 mt-10">
        <div>
          <h2 className="text-5xl font-bold">Product Name</h2>
          <p className="text-secondary text-lg mb-1">by Creator Name</p>
        </div>
        <div>5.0</div>

        <p className="font-bold text-3xl">
          $ 10.50{" "}
          <span className="text-lg text-secondary">
            <s> $12.23</s>
          </span>
          <span className="text-lg text-green-700"> 20% off</span>
        </p>
        <p>
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ad minus vel
          assumenda accusamus soluta doloribus laborum nulla debitis illo cupiditate iste velit at,
          repellat dolor? Nesciunt soluta voluptate nobis?
        </p>
        <Button variants="primary">Buy Now</Button>
        <Button variants="outlined">Add to cart</Button>
      </div>
    </div>
  );
}

export default ProductDetails;
