import { useOutsideClick } from "@/hooks/useOutsideClick";
import React, { useState } from "react";

function SearchInput({ input, onInput }: { input: string; onInput: (value: string) => void }) {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useOutsideClick(() => {
    setShowInput(false);
  });

  function handleShow() {
    setShowInput(true);
    setTimeout(() => {
      inputRef.current?.focus();
    });
  }

  return (
    <div onClick={handleShow} ref={inputRef}>
      {showInput ? (
        <input
          id="search"
          value={input}
          className="text-lg h-[100%] px-5 w-[300px] rounded-full text-secondary block border-none bg-[#443e3e] outline-none"
          placeholder=""
          onChange={(e) => onInput(e.target.value)}
        />
      ) : (
        <div className="w-[300px] px-5 pl-10 py-1">
          <label htmlFor="search" className="text-sm text-secondary font-semibold block">
            Keyword
          </label>
          <p className="text-lg text-secondary ">{input || "Search WebZee"}</p>
        </div>
      )}
    </div>
  );
}

export default SearchInput;
