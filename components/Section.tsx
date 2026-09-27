import { ReactNode } from "react";

export default function Section({
  id,
  children,
  tone = "sand",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: "sand" | "mist" | "forest";
  className?: string;
}) {
  const tones: Record<string, string> = {
    sand: "bg-sand text-stone",
    mist: "bg-mist text-stone",
    forest: "bg-forest text-sand",
  };

  return (
    <section
      id={id}
      className={`${tones[tone]} scroll-mt-20 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6">{children}</div>
    </section>
  );
}
