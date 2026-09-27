import { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-[0.95rem] font-medium transition-colors duration-200 focus-visible:outline-2";

  const variants: Record<string, string> = {
    primary: "bg-forest text-sand hover:bg-forest-light",
    secondary:
      "bg-transparent text-sand border border-sand/70 hover:bg-sand/10",
    ghost:
      "bg-transparent text-forest border border-forest/30 hover:bg-forest/5",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
