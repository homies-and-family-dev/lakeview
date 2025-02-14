"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Trophy, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const proyectos = [
  { nombre: "Alta Gracia", imagen: "/pomar/altagracia.jpg" },
  { nombre: "Hacienda", imagen: "/pomar/hacienda.jpg" },
  { nombre: "Las Marías", imagen: "/pomar/lasamaria.jpg" },
  { nombre: "Millenium", imagen: "/pomar/millenium.jpg" },
  { nombre: "Parque", imagen: "/pomar/parque.jpg" },
  { nombre: "San Jacinto", imagen: "/pomar/sanjancinto.jpg" },
  { nombre: "San Jerónimo", imagen: "/pomar/sanjeronimo.jpg" },
  { nombre: "Santo Domingo", imagen: "/pomar/santodomingo.jpg" }
];

export default function Alliance() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const itemWidth = container.offsetWidth;
    const newIndex = direction === 'left' 
      ? Math.max(0, currentIndex - 1)
      : Math.min(proyectos.length - 1, currentIndex + 1);

    setCurrentIndex(newIndex);
    container.scrollTo({
      left: newIndex * itemWidth,
      behavior: 'smooth'
    });
  };

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const index = Math.round(container.scrollLeft / container.offsetWidth);
    setCurrentIndex(index);
    setCanScrollLeft(index > 0);
    setCanScrollRight(index < proyectos.length - 1);
  };

  return (
    <div className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Contenido */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block bg-white px-4 py-2 rounded-full">
              <span className="text-[#1B3C59] font-medium">Respaldo y Experiencia</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3C59]">
              Con el respaldo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Constructora El Pomar</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
              <div className="flex items-center gap-3">
                <Building2 className="text-blue-500" size={24} />
                <div>
                  <p className="text-2xl font-bold text-[#1B3C59]">27+</p>
                  <p className="text-sm text-gray-600">Años de experiencia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="text-blue-500" size={24} />
                <div>
                  <p className="text-2xl font-bold text-[#1B3C59]">10+</p>
                  <p className="text-sm text-gray-600">Proyectos exitosos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-blue-500" size={24} />
                <div>
                  <p className="text-2xl font-bold text-[#1B3C59]">100%</p>
                  <p className="text-sm text-gray-600">Cumplimiento</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600">
              El Pomar es sinónimo de calidad y confianza en Ibagué, con más de dos décadas 
              diseñando y construyendo proyectos residenciales de alta valorización. Su respaldo 
              garantiza la excelencia en cada detalle de Prado Lake View.
            </p>

            <div className="flex gap-4">
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 bg-[#1B3C59] text-white px-6 py-3 rounded-lg hover:bg-[#2A5A85] transition-all shadow-lg hover:shadow-xl group"
              >
                Conoce más sobre el proyecto
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Carrusel mejorado para mobile */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl">
                <div 
                  ref={scrollContainerRef}
                  onScroll={checkScroll}
                  className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar touch-pan-x"
                  style={{ 
                    WebkitOverflowScrolling: 'touch',
                    scrollBehavior: 'smooth'
                  }}
                >
                  <div className="flex">
                    {proyectos.map((proyecto, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-[85vw] md:w-[600px] flex-shrink-0 snap-center px-2"
                      >
                        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                          <Image
                            src={proyecto.imagen}
                            alt={proyecto.nombre}
                            fill
                            priority
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-8">
                            <p className="text-white font-semibold text-2xl">{proyecto.nombre}</p>
                            <p className="text-gray-200 text-sm mt-2">Proyecto Destacado</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Botones de navegación reposicionados */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 right-0 md:-right-4 flex justify-between pointer-events-none px-2 md:px-8">
                <button
                  onClick={() => scroll('left')}
                  className={`p-2 md:p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-all pointer-events-auto ${
                    !canScrollLeft ? 'opacity-0' : 'opacity-100'
                  }`}
                  disabled={!canScrollLeft}
                >
                  <ChevronLeft className="text-[#1B3C59]" size={24} />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className={`p-2 md:p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-all pointer-events-auto ${
                    !canScrollRight ? 'opacity-0' : 'opacity-100'
                  }`}
                  disabled={!canScrollRight}
                >
                  <ChevronRight className="text-[#1B3C59]" size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
