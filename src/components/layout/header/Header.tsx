"use client";
import { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLink";
import Image from "next/image";
import Link from "next/link";
import { AlignLeft, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-[1000]">
      <nav
        className={`fixed w-full z-50 h-14 items-center transition-all duration-300 ${
          isScrolled
            ? "bg-[rgba(0,0,0,0.6)] shadow"
            : "bg-transparent"
        }`}
        aria-label="Navegación principal"
      >
        <div className="flex flex-row justify-between items-center h-full px-6 xl:px-40">
          <div className="flex items-center">
            <Link href="/" aria-label="Ir al inicio">
              <Image
                className="w-full max-w-24"
                src="/logo/logoblanco.png"
                alt="Logo Monteazul Group"
                width={100}
                height={45}
                priority
              />
            </Link>
          </div>
          <div className="hidden lg:flex md:gap-4 lg:gap-6 items-center">
            <NavigationLinks />
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X style={{ color: "#fff" }} size={24} />
              ) : (
                <AlignLeft style={{ color: "#fff" }} size={24} />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div
            className="lg:hidden bg-zinc-800 absolute top-16 py-10 left-0 w-full flex flex-col gap-5 items-center"
            aria-label="Menú móvil"
            role="menu"
          >
            <NavigationLinks />
          </div>
        )}
      </nav>
    </header>
  );
}
