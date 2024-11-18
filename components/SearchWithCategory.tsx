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
    console.log(level, value);
    setSelect((prev) => {
      const prevCp = [...prev];
      prevCp[level!] = value;
      console.log(prevCp);
      return prevCp;
    });
  }
  function onSearch() {
    console.log(pathName, pathName !== "/marketplace");
    updateCategory?.(select);
    updateSearch?.(input);

    if (pathName !== "/marketplace") {
      router.push("/marketplace");
    }
  }
  return (
    <div className="flex relative h-14 w-[600px] rounded-full bg-tertiary mx-2">
      <SearchInput input={input} onInput={onInput} />
      <div className="w-[1px] h-10 mt-2 bg-gray-700"></div>
      <SelectCategory select={select} onSelect={onSelect} />
      <div className="absolute right-1 my-[5px]">
        <Button variants="primary">
          <div className="[&_svg]:size-7" onClick={onSearch}>
            <SearchIcon />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default SearchWithCategory;
