"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Trees, Dumbbell, Coffee, Users, Flower2, Trophy, Ship, X } from 'lucide-react';

const amenidades = [
  {
    titulo: "Club Náutico",
    descripcion: "Disfruta de actividades acuáticas y deportes náuticos en nuestro exclusivo club",
    imagen: "/amenidades/clubnautico.jpg",
    icono: Ship
  },
  {
    titulo: "Bar Lounge",
    descripcion: "Un espacio sofisticado para relajarte con una vista espectacular",
    imagen: "/amenidades/bar.jpg",
    icono: Coffee
  },
  {
    titulo: "Sendero Forestal",
    descripcion: "Conecta con la naturaleza en nuestros senderos ecológicos",
    imagen: "/amenidades/forestal.jpg",
    icono: Trees
  },
  {
    titulo: "Gimnasio Premium",
    descripcion: "Mantén tu estilo de vida activo con equipos de última generación",
    imagen: "/amenidades/gimnasio.jpg",
    icono: Dumbbell
  },
  {
    titulo: "Campo de Golf",
    descripcion: "Practica tu swing en nuestro exclusivo campo de golf",
    imagen: "/amenidades/golf.jpg",
    icono: Trophy
  },
  {
    titulo: "Zona de Juegos",
    descripcion: "Espacios recreativos para toda la familia",
    imagen: "/amenidades/juegos.jpg",
    icono: Users
  },
  {
    titulo: "Sala de Juntas",
    descripcion: "Espacio profesional para reuniones y trabajo remoto",
    imagen: "/amenidades/saladejuntas.jpg",
    icono: Users
  },
  {
    titulo: "Spa & Wellness",
    descripcion: "Tu oasis de relajación con vista al embalse",
    imagen: "/amenidades/spa.jpg",
    icono: Flower2
  }
];

export default function Amenities() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="amenidades" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 px-4 py-2 rounded-full mb-4">
            <span className="text-[#1B3C59] font-medium">Estilo de Vida Premium</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3C59] mb-4">
            Un Mundo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Experiencias Exclusivas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Descubre un estilo de vida sin precedentes, donde cada amenidad ha sido diseñada 
            para brindarte momentos extraordinarios junto al embalse.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-[#1B3C59] text-white px-8 py-4 rounded-lg hover:bg-[#2A5A85] transition-all shadow-lg hover:shadow-xl group"
          >
            Agenda un recorrido VIP
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenidades.map((amenidad, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedImage(amenidad.imagen)}
            >
              <div className="relative h-64">
                <Image
                  src={amenidad.imagen}
                  alt={amenidad.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <amenidad.icono className="text-white" size={24} />
                    <h3 className="text-xl font-bold text-white">{amenidad.titulo}</h3>
                  </div>
                  <p className="text-sm text-gray-200">
                    {amenidad.descripcion}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Cada amenidad ha sido cuidadosamente diseñada para brindarte una experiencia de vida excepcional.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 border-2 border-[#1B3C59] text-[#1B3C59] px-8 py-4 rounded-lg hover:bg-[#1B3C59] hover:text-white transition-all group"
          >
            Conoce todos los beneficios
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-5xl w-full aspect-video"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X size={24} className="text-[#1B3C59]" />
              </button>
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={selectedImage}
                  alt="Amenidad ampliada"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
