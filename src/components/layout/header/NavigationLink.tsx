import Link from "next/link";

export default function NavigationLinks() {

  return (
    <>
      <Link
        href="/#testimonios"
        className="text-white"
        aria-label="Ir a la sección de testimonios"
      >
        Testimonios
      </Link>
      <Link
        href="/#imagenes"
        className="text-white"
        aria-label="Ir a la sección de imágenes"
      >
        Imágenes
      </Link>
      <Link
        href="/#financiacion"
        className="text-white"
        aria-label="Ir a la sección de financiación"
      >
        Financiación
      </Link>
      <Link
        href="/#tipologias"
        className="text-white"
        aria-label="Ir a la sección de tipologías"
      >
        Tipologías
      </Link>
      <Link
        href="/#contacto"
        className="text-zinc-800 border-2 border-[#ffffff] rounded-full px-6 py-1.5 font-semibold bg-white hover:border-white"
        aria-label="Ir a la sección de contacto"
      >
        Contacto
      </Link>
    </>
  );
}
