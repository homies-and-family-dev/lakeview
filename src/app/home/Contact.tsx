"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Building2,
  ArrowRight
} from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const sedes = [
  {
    ciudad: "Ibagué",
    direccion: "Carrera 5 Sur No. 83-40 Florida 3 local 8 MonteAzul Group",
    horario: "Lunes a Sábado: 9:00 AM - 6:00 PM",
    icono: Building2
  },
  {
    ciudad: "Bogotá",
    direccion: "Calle 90# 11A - 04 Barrio el Chicó",
    horario: "Lunes a Viernes: 9:00 AM - 6:00 PM",
    icono: Building2
  },
  {
    ciudad: "Prado",
    direccion: "Isla de atención en muelle de la represa de Prado",
    horario: "Lunes a sábado: 9:00 AM - 6:00 PM",
    icono: MapPin
  }
];

export default function Contact() {
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    horarioContacto: "",
    aceptaTerminos: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log({ ...formData, phone });
  };

  return (
    <section id="contacto" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 px-4 py-2 rounded-full mb-4">
            <span className="text-[#1B3C59] font-medium">Contáctanos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3C59] mb-4">
            ¿Listo para vivir la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">experiencia Prado Lake View</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Déjanos tus datos y un asesor se pondrá en contacto contigo para brindarte 
            toda la información que necesitas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ingresa tu nombre completo"
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tucorreo@ejemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <PhoneInput
                  country={'co'}
                  value={phone}
                  onChange={phone => setPhone(phone)}
                  containerClass="!w-full"
                  inputClass="!w-full !h-12 !text-base"
                  buttonClass="!h-12"
                />
              </div>

              <div className="form-group">
                <label 
                  htmlFor="horario"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Horario de visita
                </label>
                <select
                  id="horario"
                  name="horario"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  aria-label="Selecciona un horario de visita"
                >
                  <option value="">Selecciona un horario</option>
                  <option value="8-10">8:00 AM - 10:00 AM</option>
                  <option value="10-12">10:00 AM - 12:00 PM</option>
                  <option value="2-4">2:00 PM - 4:00 PM</option>
                </select>
              </div>

              {/* Checkbox simplificado */}
              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  className="mt-1.5 w-5 h-5 text-blue-500 focus:ring-blue-500 rounded border-gray-300 
                           cursor-pointer transition-all hover:border-blue-500"
                  checked={formData.aceptaTerminos}
                  onChange={(e) => setFormData({...formData, aceptaTerminos: e.target.checked})}
                  required
                />
                <span className="text-sm text-gray-600 flex-1">
                  Acepto los{" "}
                  <Link 
                    href="/terminos-y-condiciones"
                    className="text-blue-500 hover:text-blue-700 underline"
                  >
                    términos y condiciones
                  </Link>
                  {" "}y autorizo el tratamiento de mis datos personales para recibir información del proyecto.
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-[#1B3C59] text-white px-8 py-4 rounded-lg hover:bg-[#2A5A85] 
                         transition-all shadow-lg hover:shadow-xl flex items-center justify-center 
                         gap-2 group mt-8"
              >
                Solicitar información
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Sedes */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1B3C59] mb-8">
              Nuestras Sedes
            </h3>
            
            {sedes.map((sede, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="flex gap-4">
                  <sede.icono className="text-blue-500 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-semibold text-[#1B3C59] mb-2">
                      {sede.ciudad}
                    </h4>
                    <p className="text-gray-600 mb-2">{sede.direccion}</p>
                    <div className="flex items-start gap-2 text-sm text-gray-500">
                      <Clock className="flex-shrink-0 mt-1" size={16} />
                      <p className="whitespace-pre-line">{sede.horario}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
