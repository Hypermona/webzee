import React from "react";
import Logo from "./UI/logo";
import SearchWithCategory from "./SearchWithCategory";
import Button from "./UI/button";
import { CircleUser, Globe, Menu, ShoppingCart, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <nav className="flex p-3 items-center justify-between mx-[16px] sm:mx-[40px] md:mx-[80px]">
      <div className="text-5xl font-bold tracking-tight">
        <Logo />
      </div>
      <div className="flex items-center gap-3">
        <SearchWithCategory />
        <Button variants="outlined">
          <div className="[&_svg]:size-6">
            <SlidersHorizontal />
          </div>
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Link href={"/"}>List your creation</Link>
        <Button variants="ghost">
          <div className="[&_svg]:size-5">
            <Globe />
          </div>
        </Button>
        <Button variants="outlined">
          <div className="flex [&_svg]:size-7 mx-3">
            <Menu />
            <CircleUser />
          </div>
        </Button>
        <Button variants="outlined">
          <div className="flex [&_svg]:size-6">
            <ShoppingCart />
          </div>
        </Button>
      </div>
    </nav>
  );
}

export default Header;
