import ProductCard from "@/components/ProductCard";
import React from "react";

function Marketplace() {
  return (
    <div className="mx-[16px] mt-5 sm:mx-[40px] md:mx-[80px]">
      <p className="text-[32px] font-bold">Avatars / Human-like</p>
      <div className="flex gap-[32px] mt-5 flex-wrap ">
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <ProductCard key={i} />
          ))}
      </div>
    </div>
  );
}

export default Marketplace;
