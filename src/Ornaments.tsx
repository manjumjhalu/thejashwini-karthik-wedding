export function Ganesha({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 130"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="foil"
          x1="20"
          y1="0"
          x2="100"
          y2="130"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f4dd9c" />
          <stop offset=".45" stopColor="#a77937" />
          <stop offset=".7" stopColor="#e6c782" />
          <stop offset="1" stopColor="#9c6c2c" />
        </linearGradient>
      </defs>
      <g
        stroke="url(#foil)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M42 42Q35 28 59 12Q84 28 78 42M45 33H76M51 23H69M59 9V4M40 45Q18 26 15 51Q13 77 39 78M80 45Q104 28 106 53Q107 77 83 78" />
        <path d="M42 42Q32 62 47 77Q56 86 54 97Q53 109 67 108Q84 106 77 96Q72 91 67 96M78 43Q89 65 72 78Q63 84 63 94M50 54L54 56M68 54L72 52M59 44V52M43 70L39 82M77 70L83 82" />
        <path d="M40 83Q25 83 25 99L16 109Q38 118 51 112M82 83Q99 84 97 100L105 110Q85 119 74 113M28 99L45 101M79 100L94 100M34 120H88M43 125H79" />
        <path d="M21 45Q22 65 33 67M99 45Q98 65 88 67" opacity=".55" />
      </g>
    </svg>
  )
}
export function Lotus({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 65"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M50 53Q22 31 50 4Q78 31 50 53ZM50 53Q14 50 13 18Q42 20 50 53ZM50 53Q86 50 87 18Q58 20 50 53ZM50 53Q19 63 3 38Q30 31 50 53ZM50 53Q81 63 97 38Q70 31 50 53ZM18 60H82" />
    </svg>
  )
}
export function Lamp({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`lamp ${className}`}
      viewBox="0 0 120 280"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="brass">
          <stop stopColor="#78501e" />
          <stop offset=".45" stopColor="#ebcc80" />
          <stop offset=".65" stopColor="#bc8c40" />
          <stop offset="1" stopColor="#614017" />
        </linearGradient>
      </defs>
      <g fill="url(#brass)" stroke="#bc9149" strokeWidth=".7">
        <path d="M55 63H65L68 222H52Z" />
        <ellipse cx="60" cy="69" rx="38" ry="9" />
        <path d="M21 65Q60 100 99 65Z" />
        <ellipse cx="60" cy="59" rx="28" ry="5" />
        <path d="M53 49L60 25L67 49Z" />
        <path d="M47 212Q60 199 73 212L79 238H41Z" />
        <ellipse cx="60" cy="241" rx="29" ry="8" />
        <path d="M38 244L24 262H96L82 244Z" />
        <ellipse cx="60" cy="263" rx="39" ry="7" />
      </g>
      <g className="flames" fill="#ffde8c">
        <path d="M27 60Q15 48 27 30Q35 51 27 60Z" />
        <path d="M60 26Q49 15 60 0Q68 15 60 26Z" />
        <path d="M92 60Q83 49 94 31Q101 51 92 60Z" />
      </g>
    </svg>
  )
}
