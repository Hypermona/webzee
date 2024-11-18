"use client";
import ProductCard from "@/components/ProductCard";
import { CategoryContext } from "@/contexts/SearchWithCategoryContext";
import { products, Product } from "@/lib/data";
import React, { useContext } from "react";

function Marketplace() {
  const { search, categoryPath } = useContext(CategoryContext);
  let filteredProduct: Product[] = [];
  if (search) {
    filteredProduct = products.filter((product) =>
      product.productName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  } else {
    filteredProduct =
      categoryPath.length == 0 || categoryPath[0] == "all"
        ? products
        : products.filter(
            (product) =>
              product.category[0] === categoryPath[0] && product.category[1] === categoryPath[1]
          );
  }
  console.log(search, categoryPath);
  return (
    <div className="mx-[16px] mt-5 sm:mx-[40px] md:mx-[80px]">
      <p className="text-[32px] font-bold">Avatars / Human-like</p>
      <div className="flex gap-[32px] mt-5 flex-wrap ">
        {filteredProduct.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Marketplace;
