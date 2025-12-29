import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  linkClassName?: string;
  to?: string;
  alt?: string;
}

export default function Logo({
  className = "w-auto",
  linkClassName = "block",
  to = "/",
  alt = "Community House of Prayer"
}: LogoProps) {
  return (
    <Link to={to} className={linkClassName} aria-label={alt}>
      <div className={className}>
        <img 
          src="/logo-animated.svg" 
          alt={alt} 
          className="w-full h-auto" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/logo.png";
          }}
        />
      </div>
    </Link>
  );
}