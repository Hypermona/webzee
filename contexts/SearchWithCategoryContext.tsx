import React from "react";
import { ReactNode, useState } from "react";

export const CategoryContext = React.createContext<{
  search: string;
  categoryPath: string[];
  updateCategory?: (categories: string[]) => void;
  updateSearch?: (value: string) => void;
}>({ search: "", categoryPath: ["all"], updateCategory: undefined });

export function SearchWithCategoryProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<string[]>(["all"]);
  const [search, setSearch] = useState("");
  function updateCategory(categories: string[]) {
    setPath(categories);
  }
  function updateSearch(value: string) {
    setSearch(value);
  }
  return (
    <CategoryContext.Provider value={{ search, updateSearch, categoryPath: path, updateCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
