import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function FoodiereeLogo({ className = "", size = 44 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Main Pin Gradient */}
        <linearGradient id="foodiereePinGrad" x1="50" y1="5" x2="50" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="25%" stopColor="#FF7A1A" />
          <stop offset="70%" stopColor="#FF3814" />
          <stop offset="100%" stopColor="#D92006" />
        </linearGradient>

        {/* Outer Dark Border Shadow */}
        <filter id="logoShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#12100E" floodOpacity="0.4" />
        </filter>

        {/* Silver Metal Spoon/Fork Gradient */}
        <linearGradient id="cutleryGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2621" />
          <stop offset="50%" stopColor="#141210" />
          <stop offset="100%" stopColor="#3D3730" />
        </linearGradient>

        <linearGradient id="innerPlateGrad" x1="50" y1="20" x2="50" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2D2824" />
          <stop offset="100%" stopColor="#141210" />
        </linearGradient>
      </defs>

      {/* Main Map Pin Outer Shield */}
      <path
        d="M50 94 C48 90, 14 62, 14 36 C14 16, 30 6, 50 6 C70 6, 86 16, 86 36 C86 62, 52 90, 50 94 Z"
        fill="url(#foodiereePinGrad)"
        stroke="#141210"
        strokeWidth="5"
        strokeLinejoin="round"
        filter="url(#logoShadow)"
      />

      {/* Inner Pin Highlight Rim */}
      <path
        d="M50 88 C48.5 84.5, 18 58, 18 36 C18 19, 32 10, 50 10 C68 10, 82 19, 82 36 C82 58, 51.5 84.5, 50 88 Z"
        fill="none"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="2"
      />

      {/* Spoon (Left Side) */}
      <g>
        {/* Spoon Head */}
        <ellipse cx="23" cy="22" rx="4.5" ry="7" fill="#141210" stroke="#FFF5EA" strokeWidth="1.5" />
        {/* Spoon Handle */}
        <path d="M23 29 L23 48 C23 49, 21.5 50, 23 51" stroke="#141210" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Fork (Right Side) */}
      <g>
        {/* Fork Base & Tines */}
        <path
          d="M72 16 L72 25 C72 28, 77 28, 77 25 L77 16 M74.5 16 L74.5 24"
          stroke="#141210"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Fork Handle */}
        <path d="M74.5 28 L74.5 48" stroke="#141210" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Central Camera / Plate Rim */}
      <circle cx="50" cy="38" r="19" fill="#141210" stroke="#FFF0DD" strokeWidth="2.5" />
      <circle cx="50" cy="38" r="14" fill="url(#innerPlateGrad)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

      {/* 4 Camera Lens / Plate Rivets */}
      <circle cx="50" cy="21" r="1" fill="#FFF" opacity="0.8" />
      <circle cx="50" cy="55" r="1" fill="#FFF" opacity="0.8" />
      <circle cx="33" cy="38" r="1" fill="#FFF" opacity="0.8" />
      <circle cx="67" cy="38" r="1" fill="#FFF" opacity="0.8" />

      {/* Central Play Button Triangle */}
      <polygon
        points="46,31 46,45 59,38"
        fill="#F59E0B"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Bottom Mini Location Pin */}
      <circle cx="50" cy="74" r="4.5" fill="#141210" stroke="#FFF" strokeWidth="1.5" />
      <circle cx="50" cy="74" r="2" fill="#F59E0B" />
    </svg>
  );
}
