import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  linkTo?: string;
}

function Logo({ className = '', linkTo = '/' }: LogoProps) {
  const logoContent = (
    <div className={`flex flex-col ${className}`}>
      <span className="text-xl md:text-2xl font-bold text-brand-blue uppercase tracking-tight">
        Community House
      </span>
      <span className="text-sm md:text-base font-semibold text-brand-gold tracking-widest -mt-1">
        OF PRAYER
      </span>
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="hover:opacity-90 transition-opacity">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

export default Logo;
