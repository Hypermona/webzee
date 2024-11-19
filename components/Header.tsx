import React from "react";
import Logo from "./UI/logo";
import SearchWithCategory from "./SearchWithCategory";
import Button from "./UI/button";
import { CircleUser, Globe, Menu, ShoppingCart, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <nav className="flex gap-1 p-1 pt-3 sm:p-3 items-center justify-between mx-[16px] sm:mx-[40px] md:mx-[80px]">
      <div className="ml-[-10px] hidden sm:block">
        <Link href={"/marketplace"}>
          <Logo className="" />
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <SearchWithCategory />
        <Button variants="outlined" className="h-10 hidden sm:inline-flex">
          <div className="[&_svg]:size-5">
            <SlidersHorizontal />
          </div>
        </Button>
      </div>
      <div className="items-center gap-3 hidden sm:flex">
        <Link href={"/"}>List your creation</Link>
        <Button variants="ghost">
          <div className="[&_svg]:size-[15px]">
            <Globe />
          </div>
        </Button>
        <Button variants="outlined">
          <div className="flex gap-2 [&_svg]:size-5 mx-3">
            <Menu />
            <CircleUser />
          </div>
        </Button>
        <Button variants="outlined">
          <div className="flex [&_svg]:size-5">
            <ShoppingCart />
          </div>
        </Button>
      </div>
      <div className="sm:hidden">
        <Button variants="outlined">
          <div className="flex gap-2 [&_svg]:size-5 mx-3">
            <Menu />
          </div>
        </Button>
      </div>
    </nav>
  );
}

export default Header;
