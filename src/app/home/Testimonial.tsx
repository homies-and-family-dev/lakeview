"use client";
import { motion } from "framer-motion";
import { MapPin, Quote } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";

const testimonios = [
  {
    foto: "/testimonios/testimonio-siete.jpg",
    texto: "Visitar el proyecto fue una experiencia única. La vista al embalse es aún más impresionante en persona. El recorrido por el apartamento modelo superó todas mis expectativas.",
    ubicacion: "Visitó desde Bogotá"
  },
  {
    foto: "/testimonios/testimonio-dos.jpg",
    texto: "El equipo comercial nos brindó un recorrido completo. Ver el atardecer desde el balcón del apartamento modelo fue el momento decisivo para mi inversión.",
    ubicacion: "Visitó desde Ibagué"
  },
  {
    foto: "/testimonios/testimonio-tres.jpg",
    texto: "Como profesional del sector, quedé impresionado con los acabados y la distribución. La vista panorámica y las amenidades en sitio son incomparables.",
    ubicacion: "Visitó desde Neiva"
  },
  {
    foto: "/testimonios/testimonio-cuatro.jpg",
    texto: "Las zonas comunes son espectaculares. El club náutico y la vista al embalse crean un ambiente de vacaciones permanentes. Definitivamente el lugar perfecto para mi familia.",
    ubicacion: "Visitó desde Medellín"
  },
  {
    foto: "/testimonios/testimonio-cinco.jpg",
    texto: "La tranquilidad del lugar es incomparable. El diseño aprovecha perfectamente la vista al embalse y la brisa natural. Un verdadero paraíso para desconectarse.",
    ubicacion: "Visitó desde Cali"
  },
  {
    foto: "/testimonios/testimonio-seis.jpg",
    texto: "Me encantó la distribución del apartamento y la calidad de los acabados. La seguridad y exclusividad del proyecto me dieron total confianza para invertir.",
    ubicacion: "Visitó desde Bucaramanga"
  }
];

export default function Testimonial() {
  return (
    <section 
      id="testimonios" 
      aria-label="Testimonios de visitantes"
      className="bg-gradient-to-b from-blue-50 to-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
            <span className="text-[#1B3C59] font-medium" role="doc-subtitle">Experiencias Reales</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3C59] mb-4">
            Visitantes que se <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">enamoraron del proyecto</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce las experiencias de quienes ya visitaron Prado Lake View y descubrieron su próximo hogar.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Lista de testimonios"
        >
          {testimonios.map((testimonio, index) => (
            <motion.article
              key={index}
              role="listitem"
              aria-label={`Testimonio de visitante desde ${testimonio.ubicacion}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
            >
              <div className="relative w-full h-80 overflow-hidden">
                <OptimizedImage
                  src={testimonio.foto}
                  alt={`Experiencia de visita en Prado Lake View - ${testimonio.ubicacion}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6 relative">
                <Quote 
                  className="absolute -top-10 left-6 text-white w-12 h-12 opacity-70" 
                  aria-hidden="true"
                />
                
                <blockquote className="relative z-10 mb-4">
                  <p className="text-gray-600 italic">
                    {testimonio.texto}
                  </p>
                </blockquote>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
                  <MapPin size={16} className="text-blue-400" aria-hidden="true" />
                  <span>{testimonio.ubicacion}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-600 mb-8">
            ¿Quieres vivir la experiencia Prado Lake View?
          </p>
          <motion.a
            href="/#contacto"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-[#1B3C59] text-white px-8 py-4 rounded-lg hover:bg-[#2A5A85] transition-all shadow-lg hover:shadow-xl"
            aria-label="Agenda tu visita al proyecto"
          >
            Agenda tu visita ahora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
