import React from "react";

function ProductCard() {
  return (
    <div>
      <div className="h-[237.3px] w-[237.3px] rounded-xl bg-[#443e3e] flex-col flex justify-center items-center">
        <div>
          <p>Avatars</p>
          <p>&gt; Human-like</p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold">Product Name</h2>
        <p className="text-secondary">Creator Name</p>
        <div>5.0</div>
        <p className="font-bold">$ 10.50</p>
      </div>
    </div>
  );
}

export default ProductCard;
