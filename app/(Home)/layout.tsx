"use client";
import Header from "@/components/Header";
import { SearchWithCategoryProvider } from "../../contexts/SearchWithCategoryContext";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuth } = useContext(AuthContext);
  const router = useRouter();
  if (!isAuth) {
    router.replace("/");
    return null;
  } else {
    return (
      <SearchWithCategoryProvider>
        <Header />
        <div className="h-[1px] mt-2  bg-[#443e3e] w-full" />
        {children}
        <div className="h-20" />
      </SearchWithCategoryProvider>
    );
  }
}
