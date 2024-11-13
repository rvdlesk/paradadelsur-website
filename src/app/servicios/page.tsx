// src/app/servicios/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

const ServiciosPage: React.FC = () => {
  const servicios = [
    {
      nombre: "Transporte de Pasajeros",
      descripcion: "Ofrecemos un servicio de transporte cómodo y seguro para nuestros pasajeros, conectando múltiples destinos a través de rutas bien establecidas.",
      icono: "🚌", // Puedes reemplazar esto con un icono personalizado o una imagen.
    },
    {
      nombre: "Mensajería y Paquetería",
      descripcion: "Envíe sus paquetes de manera rápida y segura a cualquier destino. Nuestro servicio de mensajería garantiza la entrega puntual y confiable.",
      icono: "📦",
    },
    {
      nombre: "Cafetería",
      descripcion: "Disfruta de una variedad de bebidas y snacks mientras esperas. Nuestra cafetería está equipada para ofrecerte un espacio cómodo y agradable.",
      icono: "☕",
    },
 
  ];

  return (
    <>
    <Navbar />
    <div className="bg-gray-100 container-fluid mx-auto py-40 ">

    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestros Servicios</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <div className="text-5xl mb-4">{servicio.icono}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{servicio.nombre}</h3>
            <p className="text-gray-700 leading-relaxed">{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
        <Footer />

    </>
  );
};

export default ServiciosPage;
