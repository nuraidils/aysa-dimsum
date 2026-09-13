type DimsumGlyphProps = {
  className?: string;
  variant?: "steamer" | "skewer" | "bowl";
};

export default function DimsumGlyph({ className = "", variant = "steamer" }: DimsumGlyphProps) {
  if (variant === "skewer") {
    return (
      <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
        <line x1="30" y1="170" x2="170" y2="30" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" />
        {[0, 1, 2].map((i) => (
          <ellipse
            key={i}
            cx={60 + i * 40}
            cy={140 - i * 40}
            rx="26"
            ry="20"
            fill="#FAF8F5"
            stroke="#9E1B1B"
            strokeWidth="3"
          />
        ))}
      </svg>
    );
  }

  if (variant === "bowl") {
    return (
      <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
        <path d="M30,100 Q100,160 170,100 L160,130 Q100,175 40,130 Z" fill="#7A0C0C" />
        <ellipse cx="100" cy="98" rx="70" ry="18" fill="#F59E0B" opacity="0.5" />
        <circle cx="80" cy="90" r="14" fill="#FAF8F5" stroke="#9E1B1B" strokeWidth="3" />
        <circle cx="112" cy="88" r="14" fill="#FAF8F5" stroke="#9E1B1B" strokeWidth="3" />
        <circle cx="98" cy="105" r="14" fill="#FAF8F5" stroke="#9E1B1B" strokeWidth="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <ellipse cx="100" cy="150" rx="80" ry="14" fill="#5D4037" opacity="0.25" />
      <path
        d="M25,150 C25,120 40,100 100,100 C160,100 175,120 175,150 Z"
        fill="none"
        stroke="#7A0C0C"
        strokeWidth="5"
      />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line
          key={i}
          x1={35 + i * 22}
          y1="150"
          x2={35 + i * 22}
          y2="105"
          stroke="#7A0C0C"
          strokeWidth="3"
          opacity="0.6"
        />
      ))}
      <circle cx="78" cy="92" r="15" fill="#FAF8F5" stroke="#9E1B1B" strokeWidth="3" />
      <circle cx="108" cy="88" r="16" fill="#FAF8F5" stroke="#9E1B1B" strokeWidth="3" />
      <circle cx="128" cy="98" r="13" fill="#FAF8F5" stroke="#9E1B1B" strokeWidth="3" />
    </svg>
  );
}
