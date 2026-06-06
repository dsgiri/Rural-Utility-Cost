import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* House Roof */}
      <path d="M10 45 L50 15 L90 45" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* House Base */}
      <path d="M20 38 L20 85 L80 85 L80 38" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Divider Line in House */}
      <path d="M50 40 L50 85" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.3"/>
      
      {/* Water Drop (Left) */}
      <path d="M35 76C27.5 76 23 70 23 63C23 54 35 43 35 43C35 43 47 54 47 63C47 70 42.5 76 35 76Z" fill="#60a5fa" />
      
      {/* Calculator Buttons (Right) */}
      <rect x="55" y="48" width="8" height="8" rx="2" fill="currentColor" />
      <rect x="67" y="48" width="8" height="8" rx="2" fill="currentColor" />
      <rect x="55" y="60" width="8" height="8" rx="2" fill="currentColor" />
      <rect x="67" y="60" width="8" height="8" rx="2" fill="currentColor" />
      <rect x="55" y="72" width="20" height="8" rx="2" fill="currentColor" />
    </svg>
  );
}
