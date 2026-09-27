export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="YNGS logo mark"
    >
      <circle cx="20" cy="20" r="19" fill="#1F3D2B" />
      <path
        d="M20 8c4.5 6.2 8 11.2 8 15.2a8 8 0 1 1-16 0C12 19.2 15.5 14.2 20 8Z"
        fill="#F5F0E4"
      />
      <path
        d="M15 24.5a5 5 0 0 0 5 5"
        stroke="#2E6E85"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
