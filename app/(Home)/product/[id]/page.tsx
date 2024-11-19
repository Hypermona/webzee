import ProductDetails from "@/components/ProductDetails";
import React from "react";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="mx-[16px] mt-5 sm:mx-[40px] md:mx-[80px]">
      <ProductDetails id={id} />
    </div>
  );
}

export default page;
