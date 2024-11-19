import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Category, categories } from "@/lib/data";
import { getCategoryLabels } from "@/lib/utils";
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
  const selectedCategory = getCategoryLabels(select);
  return (
    <div
      ref={selectRef}
      className={`rounded-full text-secondary w-[44vw] sm:w-[18vw] ${
        showCat ? "bg-[#443e3e]" : ""
      }`}
    >
      <div onClick={handleClick} className="ml-3 sm:ml-10 mt-1">
        <label className="text-xs text-secondary font-bold block">Keyword</label>
        <p className="text text-secondary mt-[0.5px] text-ellipsis overflow-hidden whitespace-nowrap w-[27vw] sm:w-[10vw]">
          {`${selectedCategory[0]} ${selectedCategory[1] ? "> " + selectedCategory[1] : ""}` ||
            "All"}
        </p>
      </div>
      <div
        className={`absolute z-10 shadow-md flex flex-col sm:flex-row text-foreground rounded-[32px] min-h-[352px] bg-[#443e3e] mt-5 p-[1rem] transition-all  ease-linear ${
          showCat ? "opacity-100 right-1 min-w-[260px] sm:min-w-[444px]" : "opacity-0 min-w-0 w-0"
        }`}
      >
        <ul>
          {categories.map((cat) => (
            <Item key={cat.value} category={cat} path={select} onClick={onSelect} />
          ))}
        </ul>
        <div className="ml-7 border-t border-gray-700">
          <ul>
            {categories
              .find((cat) => cat.value === select[0])
              ?.subCategories?.map((cat) => (
                <Item key={cat.value} category={cat} path={select} onClick={onSelect} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SelectCategory;
