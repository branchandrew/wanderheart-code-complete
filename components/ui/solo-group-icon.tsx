export function SoloGroupIcon({ className = "", size = 45 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 46 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle opacity="0.4" cx="28.3901" cy="11.25" r="5.625" fill="#F3F0ED" />
      <ellipse opacity="0.4" cx="30.2651" cy="31.875" rx="9.375" ry="5.625" fill="#F3F0ED" />
      <circle cx="17.142" cy="11.25" r="7.5" fill="#F3F0ED" />
      <ellipse cx="17.142" cy="31.877" rx="13.125" ry="7.5" fill="#F3F0ED" />
    </svg>
  )
}
