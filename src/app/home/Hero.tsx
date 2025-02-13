"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          className="relative w-full h-full"
        >
          <motion.video
            src="/video/videolakeview.mp4"
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `
                linear-gradient(to bottom, 
                  rgba(0,0,0,0.2) 0%, 
                  rgba(0,0,0,0.3) 50%,
                  rgba(0,0,0,0.4) 100%
                ),
                radial-gradient(circle at center, 
                  rgba(0,0,0,0.1) 0%, 
                  rgba(0,0,0,0.2) 100%
                )
              `,
              mixBlendMode: "multiply",
            }}
          ></div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center text-center text-white max-w-5xl"
        >
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="text-white font-medium">
              ¡Últimas unidades disponibles!
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Apartamentos con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 drop-shadow-2xl filter brightness-150">
              Vista Privilegiada
            </span>
            {" "}a la Represa
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-8">
            Haz tuyo este paraíso con solo $1.000.000 de reserva, directamente con nosotros, 
            sin intereses ni intermediarios
          </p>

          <Link
            href="/#contacto"
            className="group flex items-center gap-2 bg-white text-[#1B3C59] px-8 py-4 rounded-full 
                     font-semibold text-lg transition-all duration-300 
                     hover:bg-[#1B3C59] hover:text-white hover:scale-105 hover:shadow-lg"
          >
            Asegurar mi apartamento
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <p className="text-3xl font-bold">$249M</p>
              <p className="text-sm text-gray-300">Precio desde</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">$1M</p>
              <p className="text-sm text-gray-300">Separa con</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm text-gray-300">Sin intereses</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
