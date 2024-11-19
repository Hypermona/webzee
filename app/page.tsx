"use client";
import Button from "@/components/UI/button";
import Logo from "@/components/UI/logo";
import { AuthContext } from "@/contexts/AuthContext";
import { login } from "@/lib/Actions/login";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Home() {
  const [psw, setPsw] = useState("");
  const { updateAuth } = useContext(AuthContext);
  const router = useRouter();
  const onChange = (v: string) => {
    setPsw(v);
  };
  function onLogin() {
    updateAuth?.(login(psw));
    router.replace("/marketplace");
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-5xl font-bold tracking-tight flex items-center justify-center flex-wrap gap-2">
          Welcome To <Logo className="scale-125 ml-6" />
        </h1>
        <p>Continue by Entering the password</p>
        <div>
          <input
            value={psw}
            onChange={(e) => onChange(e.target.value)}
            className="h-10 bg-tertiary border border-gray-700 rounded-lg px-2"
            placeholder="Password"
          />
          <div>
            <Button variants="primary" className="mt-5 w-full" onClick={onLogin}>
              Login
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
