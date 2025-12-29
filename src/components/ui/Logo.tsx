import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string; // Classes for the image
  linkClassName?: string; // Classes for the link wrapper
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
    <Link to={to} className={linkClassName}>
      <img
        src="/logo.svg?v=13"
        alt={alt}
        className={className}
      />
    </Link>
  );
}
