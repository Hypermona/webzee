import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants: "primary" | "outlined" | "ghost";
}
function byVaraints(variants: "primary" | "outlined" | "ghost" = "primary") {
  switch (variants) {
    case "primary":
      return "bg-red-500";
    case "outlined":
      return "bg-transparent border-2";
    default:
      return "";
  }
}
function Button({ children, variants, className = "", ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${byVaraints(
        variants
      )} ${className} inline-flex min-w-10 h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`}
    >
      {children}
    </button>
  );
}

export default Button;
