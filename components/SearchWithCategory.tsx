"use client";
import React, { useContext, useState } from "react";
import Button from "./UI/button";
import { SearchIcon } from "lucide-react";
import SearchInput from "./SearchInput";
import SelectCategory from "./SelectCategory";
import { CategoryContext } from "@/contexts/SearchWithCategoryContext";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function SearchWithCategory() {
  const { updateCategory, updateSearch } = useContext(CategoryContext);
  const pathName = usePathname();
  const router = useRouter();
  const [input, setInput] = useState("");
  function onInput(value: string) {
    setInput(value);
  }
  const [select, setSelect] = useState(["all"]);
  function onSelect(level: number, value: string) {
    setSelect((prev) => {
      const prevCp = [...prev];
      let newPath = [];
      if (level === 0) {
        newPath[level] = value;
      } else {
        newPath = prevCp;
        newPath[level!] = value;
      }
      return newPath;
    });
  }
  function onSearch() {
    updateCategory?.(select);
    updateSearch?.(input);

    if (pathName !== "/marketplace") {
      router.push("/marketplace");
    }
  }
  return (
    <div className="flex relative h-12 w-[80vw] sm:w-[35vw] rounded-full bg-tertiary ml-2">
      <SearchInput input={input} onInput={onInput} />
      <div className="w-[1px] h-10 m-1 bg-gray-700"></div>
      <SelectCategory select={select} onSelect={onSelect} />
      <div className="absolute right-1 mt-[3px] ">
        <Button variants="primary" className="h-10">
          <div className="[&_svg]:size-7" onClick={onSearch}>
            <SearchIcon />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default SearchWithCategory;
