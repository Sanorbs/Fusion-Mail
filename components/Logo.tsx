import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
    <Link href="/" className={`flex items-center space-x-2 group ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Logo SVG */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            className="fill-primary-600 dark:fill-primary-500"
          />
          {/* Letter Z */}
          <path
            d="M30 30L70 30L30 70L70 70"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:scale-90"
          />
          {/* Envelope Symbol */}
          <path
            d="M35 45L50 60L65 45"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </svg>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent group-hover:from-primary-500 group-hover:to-primary-300 transition-all duration-300">
        Fusion Mail
      </span>
    </Link>
  );
};

export default Logo; 