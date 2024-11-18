"use client";
import React from "react";
import Button from "./UI/button";
import { SearchIcon } from "lucide-react";
import SearchInput from "./SearchInput";
import SelectCategory from "./SelectCategory";

function SearchWithCategory() {
  return (
    <div className="flex relative h-14 w-[600px] rounded-full bg-tertiary mx-2">
      <SearchInput />
      <div className="w-[1px] h-10 mt-2 bg-gray-700"></div>
      <SelectCategory />
      <div className="absolute right-1 my-[5px]">
        <Button variants="primary">
          <div className="[&_svg]:size-7">
            <SearchIcon />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default SearchWithCategory;
