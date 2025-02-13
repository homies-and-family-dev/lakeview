import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TerminosCondiciones() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <Link 
          href="/#contacto"
          className="inline-flex items-center gap-2 text-[#1B3C59] hover:text-blue-600 mb-8"
        >
          <ArrowLeft size={20} />
          Volver al formulario
        </Link>

        <h1 className="text-4xl font-bold text-[#1B3C59] mb-8">
          Términos y Condiciones
        </h1>

        <div className="prose prose-lg max-w-none">
          <h2>Política de Tratamiento de Datos Personales</h2>
          
          <p>
            De acuerdo con la Ley Estatutaria 1581 de 2012 de Protección de Datos y normas concordantes,
            se informa que los datos personales que usted suministre en este formulario serán tratados
            de forma segura y confidencial.
          </p>

          <h3>1. Finalidad del Tratamiento</h3>
          <p>
            Los datos personales recolectados serán utilizados para:
          </p>
          <ul>
            <li>Contacto comercial sobre el proyecto Prado Lake View</li>
            <li>Envío de información relevante sobre el proyecto</li>
            <li>Agendamiento de citas y visitas al proyecto</li>
            <li>Seguimiento a solicitudes y requerimientos</li>
          </ul>

          <h3>2. Derechos del Titular</h3>
          <p>
            Como titular de los datos personales, usted tiene derecho a:
          </p>
          <ul>
            <li>Conocer, actualizar y rectificar sus datos personales</li>
            <li>Solicitar prueba de la autorización otorgada</li>
            <li>Ser informado sobre el uso que se le ha dado a sus datos personales</li>
            <li>Presentar quejas ante la Superintendencia de Industria y Comercio</li>
            <li>Revocar la autorización y/o solicitar la supresión del dato</li>
          </ul>

          <h3>3. Mecanismos para ejercer sus derechos</h3>
          <p>
            Puede ejercer sus derechos a través de:
          </p>
          <ul>
            <li>Correo electrónico: privacidad@pradolakeview.com</li>
            <li>Teléfono: (57) 1234567</li>
            <li>Personalmente en cualquiera de nuestras sedes</li>
          </ul>

          <h3>4. Seguridad de la Información</h3>
          <p>
            Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus
            datos personales. La información es almacenada en ambientes seguros y solo personal
            autorizado tiene acceso a ella.
          </p>

          <h3>5. Cambios en la Política</h3>
          <p>
            Cualquier cambio sustancial en esta política será comunicado oportunamente a través
            de nuestros canales oficiales.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Última actualización: Marzo 2024
          </p>
        </div>
      </div>
    </div>
  );
} 