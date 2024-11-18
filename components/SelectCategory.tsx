import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Category, categories } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

interface IItem {
  category: Category;
  path: string[];
  onClick: (a: number, b: string) => void;
}

function Item({ category, path, onClick }: IItem) {
  return (
    <li
      key={category.value}
      onClick={() => onClick(category.level, category.value)}
      className={`${
        path[category.level] === category.value ? "bg-[#655d5e] rounded-full" : ""
      } px-4 py-2 cursor-pointer flex justify-between w-[200px]`}
    >
      {category.label} {category.subCategories?.length ? <ChevronRight /> : null}
    </li>
  );
}

function SelectCategory({
  select,
  onSelect,
}: {
  select: string[];
  onSelect: (level: number, value: string) => void;
}) {
  const [showCat, setShowCat] = useState(false);
  const selectRef = useOutsideClick(() => {
    setShowCat(false);
  });
  function handleClick() {
    setShowCat(true);
  }

  return (
    <div
      ref={selectRef}
      className={`rounded-full text-secondary w-[300px] ${showCat ? "bg-[#443e3e]" : ""}`}
    >
      <div onClick={handleClick} className="ml-10 mt-2">
        <label className="text-sm text-secondary font-bold block">Keyword</label>
        <p className="text-lg text-secondary">
          {`${select[0]} ${select[1] ? ">" : ""} ${select[1] || ""}` || "All"}
        </p>
      </div>
      <div
        className={`absolute z-10 shadow-md flex text-foreground rounded-[32px] min-w-[444px] min-h-[352px] bg-[#443e3e] mt-5 p-[1rem] transition-all  ease-linear ${
          showCat ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul>
          {categories.map((cat) => (
            <Item key={cat.value} category={cat} path={select} onClick={onSelect} />
          ))}
        </ul>
        <ul>
          {categories
            .find((cat) => cat.value === select[0])
            ?.subCategories?.map((cat) => (
              <Item key={cat.value} category={cat} path={select} onClick={onSelect} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SelectCategory;
