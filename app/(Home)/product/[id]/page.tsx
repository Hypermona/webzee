import ProductDetails from "@/components/ProductDetails";
import React from "react";

function page({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="mx-[16px] mt-5 sm:mx-[40px] md:mx-[80px]">
      <ProductDetails id={id} />
    </div>
  );
}

export default page;
