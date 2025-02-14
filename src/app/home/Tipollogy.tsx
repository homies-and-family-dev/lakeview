"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Maximize2, BedDouble, X, Plus, ChevronRight } from 'lucide-react';
import OptimizedImage from "@/components/ui/OptimizedImage";

const tipologias = [
  {
    id: 1,
    nombre: "Apartamento Tipo A",
    area: "30.77m²",
    habitaciones: "1",
    descripcion: "Perfecto para una persona o pareja que busca un apartamento cómodo y funcional.",
    caracteristicas: ["Cocina integrada", "Baño completo", "Zona de lavado", "Balcón con vista a la represa"],
    imagen: "/tipologias/tipologia1.jpg"
  },
    {
      id: 2,
      nombre: "Apartamento Tipo B",
      area: "38.49m²",
      habitaciones: "1",
      descripcion: "Ideal para una persona o pareja que busca un apartamento cómodo y funcional con comedor",
      caracteristicas: ["Cocina integrada", "Baño completo", "Zona de lavado", "Balcón con vista a la represa", "comedor"],
      imagen: "/tipologias/tipologia2.jpg"
    },
    {
      id: 3,
      nombre: "Apartamento Tipo C",
      area: "69.26m²",
      habitaciones: "4",
      descripcion: "Diseño moderno con acabados premium, perfecto para una pareja o una persona que busca un apartamento con sala de estar, comedor, cocina, baño y dormitorio",
      caracteristicas: ["Zona de estudio", "Balcón con vista a la represa", "sala de estar", "comedor", "cocina", "baño", "dormitorio", "zona de lavado"],
      imagen: "/tipologias/tipologia3.jpg"
    },
    {
      id: 4,
      nombre: "Apartamento Tipo D",
      area: "138.57m²",
      habitaciones: "3",
      descripcion: "Zona premium para familias grandes, con 3 dormitorios, 3 baños, cocina, comedor, sala de estar, zona de lavado y balcón con vista a la represa",
      caracteristicas: ["Zona de estudio", "Balcón francés", "sala de estar", "comedor", "cocina", "baño", "dormitorio", "zona de lavado"],
      imagen: "/tipologias/tipologia4.jpg"
    },
    {
      id: 5,
      nombre: "Apartamento Tipo C",
      area: "68.37m²",
      habitaciones: "2",
      descripcion: "Ideal para una pareja que busca un apartamento con 2 dormitorios, 2 baños, cocina, comedor, zona de lavado y balcón con vista a la represa",
      caracteristicas: ["Zona de estudio", "Balcón con vista a la represa", "comedor", "cocina", "baño", "dormitorio", "zona de lavado"],
      imagen: "/tipologias/tipologia5.jpg"
    },
    {
      id: 6,
      nombre: "Apartamento Tipo 3B",
      area: "95.71m²",
      habitaciones: "2",
      descripcion: "Perfecto para una familia que busca un apartamento con 2 dormitorios, 2 baños, cocina, comedor, zona de lavado y balcón con vista a la represa",
      caracteristicas: ["Cocina", "Baño", "Zona de lavado", "Balcón con vista a la represa", "comedor", "dormitorio", "zona de lavado"],
      imagen: "/tipologias/tipologia6.jpg"
    }
];

export default function Tipollogy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tipologias.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + tipologias.length) % tipologias.length);
  };

  return (
    <section id="tipologias" className="bg-blue-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-white px-4 py-2 rounded-full mb-4">
            <span className="text-[#1B3C59] font-medium">Diseños Exclusivos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3C59] mb-4">
            Encuentra tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Apartamento Ideal</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras diferentes tipologías, diseñadas para maximizar las vistas y 
            brindar el mejor aprovechamiento del espacio.
          </p>
        </div>

        <div className="relative px-4 md:px-8">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-8 items-center max-w-7xl mx-auto"
          >
            {/* Imagen - Ajustada para mobile y tablet */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full h-80 overflow-hidden">
                <OptimizedImage
                  src={tipologias[currentIndex].imagen}
                  alt={tipologias[currentIndex].nombre}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500"
                  priority={currentIndex === 0}
                  quality={75}
                />
              </div>
            </div>

            {/* Información */}
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-3xl font-bold text-[#1B3C59]">
                {tipologias[currentIndex].nombre}
              </h3>
              
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Maximize2 className="text-blue-500" size={24} />
                  <div>
                    <p className="text-2xl font-bold text-[#1B3C59]">{tipologias[currentIndex].area}</p>
                    <p className="text-sm text-gray-500">Área total</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <BedDouble className="text-blue-500" size={24} />
                  <div>
                    <p className="text-2xl font-bold text-[#1B3C59]">{tipologias[currentIndex].habitaciones}</p>
                    <p className="text-sm text-gray-500">Habitaciones</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-600">
                {tipologias[currentIndex].descripcion}
              </p>

              <ul className="space-y-3">
                {tipologias[currentIndex].caracteristicas.slice(0, 3).map((caracteristica, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{caracteristica}</span>
                  </li>
                ))}
                {tipologias[currentIndex].caracteristicas.length > 3 && (
                  <li>
                    <button
                      onClick={() => setShowAllFeatures(true)}
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-700 group"
                    >
                      <Plus className="group-hover:scale-110 transition-transform" size={20} />
                      Ver más
                      <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                  </li>
                )}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 bg-[#1B3C59] text-white px-8 py-4 rounded-lg hover:bg-[#2A5A85] transition-all shadow-lg hover:shadow-xl group"
                >
                  Agendar visita al apartamento modelo
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Botones de navegación reposicionados */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 right-0 md:-right-4 flex justify-between pointer-events-none px-2 md:px-8">
            <button
              onClick={prevSlide}
              className="p-2 md:p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-all pointer-events-auto"
              aria-label="Anterior tipología"
            >
              <ArrowLeft className="text-[#1B3C59]" size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 md:p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-all pointer-events-auto"
              aria-label="Siguiente tipología"
            >
              <ArrowRight className="text-[#1B3C59]" size={24} />
            </button>
          </div>
        </div>

        {/* Modal para todas las características */}
        <AnimatePresence>
          {showAllFeatures && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
              onClick={() => setShowAllFeatures(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-white rounded-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowAllFeatures(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-500" />
                </button>

                <h3 className="text-2xl font-bold text-[#1B3C59] mb-6">
                  Características del {tipologias[currentIndex].nombre}
                </h3>

                <ul className="space-y-3">
                  {tipologias[currentIndex].caracteristicas.map((caracteristica, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="text-green-500 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{caracteristica}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 text-center">
                  <Link
                    href="/#contacto"
                    className="inline-flex items-center justify-center gap-2 bg-[#1B3C59] text-white px-8 py-4 rounded-lg hover:bg-[#2A5A85] transition-all shadow-lg hover:shadow-xl group"
                  >
                    Agendar visita
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-8">
          {tipologias.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#1B3C59] w-6' : 'bg-gray-300'
              }`}
              aria-label={`Ir a tipología ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
