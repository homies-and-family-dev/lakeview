import Link from "next/link";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
  isContact?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function NavigationLink({ href, children, isScrolled, isContact, onClick }: NavigationLinkProps) {
  if (isContact) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`
          px-6 py-2.5 rounded-full font-semibold transition-all duration-300
          shadow-md hover:shadow-lg hover:scale-105
          ${isScrolled 
            ? 'bg-[#1B3C59] text-white hover:bg-[#2A5A85] border-2 border-[#1B3C59]' 
            : 'bg-white text-[#1B3C59] hover:bg-blue-50 border-2 border-white hover:border-blue-100'
          }
          animate-pulse hover:animate-none
        `}
      >
        ¡Contáctanos!
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        transition-colors duration-300
        ${isScrolled 
          ? 'text-[#1B3C59] hover:text-blue-600' 
          : 'text-white hover:text-blue-200'
        }
      `}
    >
      {children}
    </a>
  );
}
