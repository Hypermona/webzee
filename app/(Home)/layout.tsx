"use client";
import Header from "@/components/Header";
import { SearchWithCategoryProvider } from "../../contexts/SearchWithCategoryContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SearchWithCategoryProvider>
      <Header />
      <div className="h-[1px] mt-2  bg-[#443e3e] w-full" />
      {children}
      <div className="h-20" />
    </SearchWithCategoryProvider>
  );
}
