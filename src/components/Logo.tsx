import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const dimensions = {
    sm: { width: 40, height: 40, textClass: "text-lg", taglineClass: "text-[7px]" },
    md: { width: 64, height: 64, textClass: "text-2xl", taglineClass: "text-[9px]" },
    lg: { width: 120, height: 120, textClass: "text-4xl", taglineClass: "text-[11px]" },
  };

  const { width, height, textClass, taglineClass } = dimensions[size];

  return (
    <div id="logo-container" className={`flex items-center gap-3 select-none ${className}`}>
      {/* Dynamic SVG Icon recreating the CSY logo with sweeping growth arrow */}
      <svg
        id="logo-svg"
        width={width}
        height={height}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transform transition-transform duration-500 hover:scale-105"
      >
        <defs>
          <linearGradient id="csyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" /> {/* Vibrant sky blue */}
            <stop offset="50%" stopColor="#2563EB" /> {/* Bright brand blue */}
            <stop offset="100%" stopColor="#22D3EE" /> {/* Glowing cyan */}
          </linearGradient>
          <linearGradient id="arrowGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="whiteCircleGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComponentTransfer in="blur" result="glowAlpha">
              <feFuncA type="linear" slope="0.6" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="glowAlpha" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Solid White Circle Background with Elegant Soft Glow & Gradient Border */}
        <circle cx="100" cy="100" r="88" fill="#FFFFFF" filter="url(#whiteCircleGlow)" />
        <circle cx="100" cy="100" r="88" stroke="url(#csyGradient)" strokeWidth="3" fill="none" />

        {/* Stylized Letter 'C' */}
        <path
          d="M 65 75 Q 35 75 35 105 Q 35 135 65 135 Q 85 135 90 123"
          stroke="url(#csyGradient)"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />

        {/* Stylized Letter 'S' */}
        <path
          d="M 115 80 Q 95 72 85 88 Q 75 102 95 110 Q 115 118 105 132 Q 95 142 75 135"
          stroke="url(#csyGradient)"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />

        {/* Stylized Letter 'Y' body */}
        <path
          d="M 130 75 L 148 108 M 165 75 L 148 108 L 148 135"
          stroke="url(#csyGradient)"
          strokeWidth="17"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Growth Bar Chart Background */}
        <rect x="135" y="142" width="8" height="15" rx="1.5" fill="#2563EB" opacity="0.6" />
        <rect x="147" y="132" width="8" height="25" rx="1.5" fill="#1D4ED8" opacity="0.8" />
        <rect x="159" y="120" width="8" height="37" rx="1.5" fill="url(#arrowGradient)" />

        {/* Sweeping Dynamic Arrow starting from the C/S curve upwards past Y */}
        <path
          d="M 45 140 C 75 142, 115 130, 168 70"
          stroke="url(#arrowGradient)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)"
        />

        {/* Arrowhead pointing Up & Right */}
        <path
          d="M 152 64 L 176 64 L 176 88 L 168 80 Z"
          fill="url(#arrowGradient)"
          stroke="url(#arrowGradient)"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>

      {showText && (
        <div id="logo-text-block" className="flex flex-col justify-center">
          <span className={`font-display font-black tracking-widest text-white ${textClass}`}>
            CSY<span className="text-cyan-400">.</span>
          </span>
          <span className={`font-sans font-bold tracking-[0.25em] text-cyan-100 uppercase ${taglineClass}`}>
            DIGITAL MARKETING
          </span>
        </div>
      )}
    </div>
  );
}
