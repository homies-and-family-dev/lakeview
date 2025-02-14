"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationLink from "./NavigationLink";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    
    // Remover el # del href
    const id = href.replace('/#', '');
    const element = document.getElementById(id);
    
    if (element) {
      const headerOffset = 80; // altura del header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigationLinks = [
    { href: "/#nosotros", label: "Nosotros" },
    { href: "/#tipologias", label: "Tipologías" },
    { href: "/#amenidades", label: "Amenidades" },
    { href: "/#ubicacion", label: "Ubicación" },
    { href: "/#contacto", label: "Contacto" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[1001] transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="relative w-40 h-12">
            <button 
              onClick={() => router.push("/")}
              className="w-full h-full"
              aria-label="Ir a inicio"
            >
              <Image
                src={isScrolled ? "/logo/logoazul.png" : "/logo/logoblanco.png"}
                alt="Prado Lake View - Logo"
                fill
                className="object-contain"
                priority
              />
            </button>
          </div>

          {/* Navegación Desktop */}
          <nav 
            className="hidden md:flex items-center gap-8"
            role="navigation"
            aria-label="Navegación principal"
          >
            {navigationLinks.map((link) => (
              <NavigationLink 
                key={link.href}
                href={link.href} 
                isScrolled={isScrolled}
                isContact={link.href === "/#contacto"}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                aria-label={`Ir a sección ${link.label}`}
              >
                {link.label}
              </NavigationLink>
            ))}
          </nav>

          {/* Botón Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white z-[1002] min-w-[48px] min-h-[48px]"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? (
              <X size={32} className="text-white" aria-hidden="true" />
            ) : (
              <Menu 
                size={32} 
                className={isScrolled ? "text-[#1B3C59]" : "text-white"} 
                aria-hidden="true" 
              />
            )}
          </button>
        </div>
      </div>

      {/* Menú Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#1B3C59] z-[1000] md:hidden"
          >
            <nav 
              className="flex flex-col items-center justify-center h-full gap-8"
              role="navigation"
              aria-label="Menú móvil"
            >
              {navigationLinks.map((link) => (
                <NavigationLink
                  key={link.href}
                  href={link.href}
                  isScrolled={false}
                  isContact={link.href === "/#contacto"}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  aria-label={`Ir a sección ${link.label}`}
                >
                  {link.label}
                </NavigationLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
