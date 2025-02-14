import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1B3C59] text-white">
      {/* Sección principal del footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo y descripción */}
          <div className="space-y-6">
            <Image
              src="/logo/logoblanco.png"
              alt="Prado Lake View"
              width={180}
              height={60}
              className="mb-4"
            />
            <p className="text-gray-300">
              Un proyecto exclusivo con vista a la represa del río Prado, 
              diseñado para quienes buscan un estilo de vida único.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Síguenos en Facebook"
              >
                <Facebook size={24} aria-hidden="true" />
              </a>

              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors"
                aria-label="Síguenos en Instagram"
              >
                <Instagram size={24} aria-hidden="true" />
              </a>
              <Link href="https://youtube.com" target="_blank" className="hover:text-blue-400 transition-colors">
                <Youtube size={24} />
              </Link>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/#tipologias" className="text-gray-300 hover:text-white transition-colors">
                  Tipologías
                </Link>
              </li>
              <li>
                <Link href="/#amenidades" className="text-gray-300 hover:text-white transition-colors">
                  Amenidades
                </Link>
              </li>
              <li>
                <Link href="/#ubicacion" className="text-gray-300 hover:text-white transition-colors">
                  Ubicación
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Kilómetro 2 vía Prado - Purificación
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} />
                <Link href="tel:+573001234567" className="text-gray-300 hover:text-white transition-colors">
                  +57 300 123 4567
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <Mail size={20} />
                  <Link href="mailto:info@pradolakeview.com" className="text-gray-300 hover:text-white transition-colors">
                    soporte@monteazulgroup.com
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Mantente Informado</h3>
            <p className="text-gray-300 mb-4">
              Suscríbete para recibir las últimas novedades del proyecto
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-2 rounded-lg bg-[#2A5A85] border border-[#3A6A95] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-white text-[#1B3C59] px-6 py-2 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group"
              >
                Suscribirse
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="border-[#2A5A85] my-8" />

        {/* Copyright y enlaces legales */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Prado Lake View. Todos los derechos reservados. <br />
            Desarrollado por <Link href="https://www.wsdigitaldev.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">wsdigitaldev</Link>
          </p>
          <div className="flex gap-6 text-sm">
            <Link target='_blank' href="https://www.monteazulgroup.com/politicas-de-privacidad" className="text-gray-300 hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="https://www.monteazulgroup.com/politicas-de-privacidad" className="text-gray-300 hover:text-white transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
