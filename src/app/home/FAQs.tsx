"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    pregunta: "¿Cuál es el valor de la cuota inicial?",
    respuesta: "La cuota inicial es del 30% del valor total del apartamento, la cual puedes diferir durante el tiempo de construcción. Además, ofrecemos facilidades de pago y diferentes opciones de financiación para que puedas hacer tu inversión realidad."
  },
  {
    pregunta: "¿Cuándo es la fecha de entrega?",
    respuesta: "El proyecto tiene una fecha estimada de entrega para finales de 2025. Durante la construcción, podrás hacer seguimiento del avance de la obra a través de nuestros canales oficiales."
  },
  {
    pregunta: "¿Qué amenidades incluye el proyecto?",
    respuesta: "El proyecto cuenta con Club Náutico, Bar Lounge, Sendero Forestal, Gimnasio Premium, Campo de Golf, Zona de Juegos, Sala de Juntas y Spa & Wellness. Todas las amenidades están diseñadas para brindarte una experiencia de vida excepcional."
  },
  {
    pregunta: "¿Cómo es el proceso de separación?",
    respuesta: "El proceso de separación es muy sencillo. Con solo $1.000.000 puedes separar tu apartamento y asegurar el precio actual. Nuestro equipo comercial te guiará durante todo el proceso de compra."
  },
  {
    pregunta: "¿Qué vistas tienen los apartamentos?",
    respuesta: "Todos nuestros apartamentos están estratégicamente ubicados para aprovechar al máximo las vistas panorámicas hacia la represa. Los balcones y ventanales están diseñados para maximizar esta experiencia visual."
  },
  {
    pregunta: "¿Qué incluye el precio del apartamento?",
    respuesta: "El precio incluye acabados premium, parqueadero, depósito y acceso a todas las amenidades del proyecto. Los apartamentos se entregan con cocina integrada, baños completos y zona de lavado."
  },
  {
    pregunta: "¿Hay opciones de financiación?",
    respuesta: "Sí, contamos con convenios con los principales bancos del país y diferentes opciones de financiación. Nuestro equipo financiero te asesorará para encontrar la mejor opción según tus necesidades."
  },
  {
    pregunta: "¿Puedo conocer el proyecto personalmente?",
    respuesta: "¡Por supuesto! Tenemos disponibles visitas guiadas al proyecto donde podrás conocer el apartamento modelo y todas las amenidades. Agenda tu visita y te brindaremos transporte desde las principales ciudades."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 px-4 py-2 rounded-full mb-4">
            <span className="text-[#1B3C59] font-medium">Resolvemos tus dudas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3C59] mb-4">
            Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Frecuentes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestro proyecto. 
            Si tienes dudas adicionales, no dudes en contactarnos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-[#1B3C59]">{faq.pregunta}</span>
                {openIndex === index ? (
                  <Minus className="text-blue-500 flex-shrink-0" size={20} />
                ) : (
                  <Plus className="text-blue-500 flex-shrink-0" size={20} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      {faq.respuesta}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            ¿Tienes más preguntas? Nuestro equipo está listo para ayudarte
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-[#1B3C59] text-white px-8 py-4 rounded-lg hover:bg-[#2A5A85] transition-all shadow-lg hover:shadow-xl group"
          >
            Contáctanos ahora
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
