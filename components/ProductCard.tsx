import { Product } from "@/lib/data";
import Link from "next/link";
import React from "react";
import StarRating from "./UI/StarRating";
import { getCategoryLabels } from "@/lib/utils";

function ProductCard({ product }: { product: Product }) {
  const categoryLabel = getCategoryLabels(product.category);
  return (
    <div>
      <Link href={"product/" + product.id}>
        <div className="h-[237.3px] w-[237.3px] rounded-xl bg-[#443e3e] flex-col flex justify-center items-center">
          <div>
            <p>{categoryLabel[0]}</p>
            <p>&gt; {categoryLabel[1]}</p>
          </div>
        </div>
      </Link>
      <div className="mt-2">
        <Link href={"product/" + product.id}>
          <h2 className="text-lg font-bold">{product.productName}</h2>
        </Link>
        <p className="text-secondary">{product.creatorName}</p>
        <div className="flex">
          <StarRating rating={product.rating} />
          {product.rating}
        </div>
        <p className="font-bold">$ {product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
