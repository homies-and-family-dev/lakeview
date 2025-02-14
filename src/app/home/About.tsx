"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, CalendarRange } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Contenido */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="inline-block bg-blue-50 px-4 py-2 rounded-full">
              <span className="text-[#1B3C59] font-medium">Diseño Exclusivo</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3C59] leading-tight">
              Vive la Experiencia de un <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Hogar con Vista Privilegiada</span>
            </h2>

            <p className="text-lg text-gray-600">
              Descubre un espacio donde el lujo se encuentra con la naturaleza. Nuestros apartamentos 
              están diseñados para quienes buscan una vida extraordinaria, con vistas panorámicas 
              a la represa y acabados de primera calidad.
            </p>

            <ul className="space-y-4">
              {[
                'Amplios ventanales con vista panorámica',
                'Diseño arquitectónico moderno y elegante',
                'Espacios optimizados y funcionales',
                'Acabados premium seleccionados',
                'Sistema de seguridad 24/7',
                'Zonas comunes con vista a la represa'
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 bg-[#1B3C59] text-white px-8 py-4 rounded-lg hover:bg-[#2A5A85] transition-all shadow-lg hover:shadow-xl group"
              >
                <CalendarRange className="group-hover:scale-110 transition-transform" size={20} />
                Agenda tu visita personalizada
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Contenedor de imágenes */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6"
          >
            {/* Primera imagen */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px]">
              <Image 
                src="/torres.png" 
                alt="Apartamentos con vista a la represa" 
                width={500} 
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-lg font-semibold">
                  Descubre tu nuevo estilo de vida
                </p>
              </div>
            </div>

            {/* Segunda imagen */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px]">
              <Image 
                src="/apto.png" 
                alt="Vistas panorámicas desde el apartamento" 
                width={500} 
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-lg font-semibold">
                  Espacios diseñados para disfrutar
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
