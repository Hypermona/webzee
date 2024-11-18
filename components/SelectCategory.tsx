import { useOutsideClick } from "@/hooks/useOutsideClick";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

interface SubCategory {
  label: string;
  value: string;
  level: number;
}

interface Category {
  label: string;
  value: string;
  level: number;
  subCategories?: SubCategory[];
}

const categories: Category[] = [
  {
    label: "Avatars",
    value: "avatars",
    level: 0,
    subCategories: [
      { label: "Human-like", value: "humanLike", level: 1 },
      { label: "Antro & Furry", value: "antroAndFurry", level: 1 },
      { label: "Robot and Cybrogs", value: "robotAndCybrogs", level: 1 },
      { label: "Others", value: "others", level: 1 },
      { label: "All in Avatars", value: "allInAvatars", level: 1 },
    ],
  },
  {
    label: "Fashion",
    value: "fashion",
    level: 0,
    subCategories: [
      { label: "Cloths", value: "cloths", level: 1 },
      { label: "Accessories", value: "accessories", level: 1 },
      { label: "Others", value: "others", level: 1 },
      { label: "All in Avatars", value: "allInAvatars", level: 1 },
    ],
  },
  {
    label: "All",
    value: "all",
    level: 0,
    subCategories: [],
  },
];

interface IItem {
  category: Category;
  path: string[];
  onClick: (a: number, b: string) => void;
}

function Item({ category, path, onClick }: IItem) {
  return (
    <li
      key={category.value}
      onClick={() => onClick(0, category.value)}
      className={`${
        path[category.level] === category.value ? "bg-[#655d5e] rounded-full" : ""
      } px-4 py-2 cursor-pointer flex justify-between w-[200px]`}
    >
      {category.label} {category.subCategories?.length ? <ChevronRight /> : null}
    </li>
  );
}

function SelectCategory() {
  const [showCat, setShowCat] = useState(false);
  const [categoryPath, setCategoryPath] = useState(["all"]);
  const selectRef = useOutsideClick(() => {
    setShowCat(false);
  });
  function handleClick() {
    setShowCat(true);
  }
  function handleCategoryChange(level: number, value: string) {
    setCategoryPath((prev) => {
      const prevCp = [...prev];
      prevCp[level!] = value;
      console.log(prevCp);
      return prevCp;
    });
  }
  return (
    <div
      ref={selectRef}
      className={`rounded-full text-secondary w-[300px] ${showCat ? "bg-[#443e3e]" : ""}`}
    >
      <div onClick={handleClick} className="ml-10 mt-2">
        <label className="text-sm text-secondary font-bold block">Keyword</label>
        <p className="text-lg text-secondary">All</p>
      </div>
      <div
        className={`absolute flex text-foreground rounded-[32px] min-w-[444px] min-h-[352px] bg-[#443e3e] mt-5 p-[1rem] transition-all  ease-linear ${
          showCat ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul>
          {categories.map((cat) => (
            <Item
              key={cat.value}
              category={cat}
              path={categoryPath}
              onClick={handleCategoryChange}
            />
          ))}
        </ul>
        <ul>
          {categories
            .find((cat) => cat.value === categoryPath[0])
            ?.subCategories?.map((cat) => (
              <Item
                key={cat.value}
                category={cat}
                path={categoryPath}
                onClick={handleCategoryChange}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SelectCategory;
