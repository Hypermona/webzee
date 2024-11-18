import Logo from "@/components/UI/logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Welcome To <Logo />
        </h1>
        <p>Continue by Entering the password</p>
        <div>
          <input />
          <div>
            <Link href={"/marketplace"}>Login</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
