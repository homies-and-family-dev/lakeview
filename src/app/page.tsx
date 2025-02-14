"use client";
import dynamic from 'next/dynamic';
import Header from "@/components/layout/header/Header";
import Hero from "./home/Hero";
import About from "./home/About";

// Importar dinámicamente todos los componentes que podrían usar window o APIs del navegador
const Tipollogy = dynamic(() => import('./home/Tipollogy'), { ssr: false });
const Amenities = dynamic(() => import('./home/Amenities'), { ssr: false });
const Alliance = dynamic(() => import('./home/Alliance'), { ssr: false });
const Ubication = dynamic(() => import('./home/Ubication'), { ssr: false });
const FAQs = dynamic(() => import('./home/FAQs'), { ssr: false });
const Contact = dynamic(() => import('./home/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/layout/footer/Footer'), { ssr: false });
const Testimonial = dynamic(() => import('./home/Testimonial'), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Ubication />
      <About />
      <Testimonial />
      <Tipollogy />
      <Amenities />
      <Alliance />
      <FAQs />
      <Contact />
      <Footer />
    </>
  );
}
