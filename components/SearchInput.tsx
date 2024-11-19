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
    <div onClick={handleShow}>
      {showInput ? (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          id="search"
          value={input}
          className="text-lg h-[100%] px-5 pl-8 w-[35vw] sm:w-[17vw] rounded-full text-secondary block border-none bg-[#443e3e] outline-none"
          placeholder=""
          onChange={(e) => onInput(e.target.value)}
        />
      ) : (
        <div className="w-[35vw] sm:w-[17vw] px-5 pl-10 py-1">
          <label htmlFor="search" className="text-xs text-secondary font-bold block">
            Keyword
          </label>
          <p className="text-secondary mt-[0.5px] text-ellipsis whitespace-nowrap overflow-hidden">
            {input || "Search WebZee"}
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchInput;
