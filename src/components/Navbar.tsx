// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Barra Superior de Contacto */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white text-sm py-2 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
          <span className=" text-white">📍  <a className="hover:text-gray-400" href='https://www.waze.com/en/live-map/directions/parada-del-sur-avenida-duarte-135-villa-consuelo?place=w.190120121.1901266744.7352870' target='_blank'> Avenida Duarte #135, Villa Consuelo, Distrito Nacional, República Dominicana</a></span>
          <span className=" text-white">☎ <a className="hover:text-gray-400" href='tel:8096874283' target='_blank'>809-687-4283</a></span>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/ParadaDelSur/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="hover:text-[#3D58A7] transition duration-300">
              <i className="ri-facebook-fill text-lg"></i>
            </a>

            <a href="https://www.instagram.com/paradadelsur" target="_blank" rel="noopener noreferrer" className="hover:text-[#3D58A7] transition duration-300">
              <i className="ri-instagram-fill text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar Principal */}
      <header className="fixed top-[40px] left-0 right-0 bg-white shadow-lg z-40">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Parada del Sur Logo" className="h-12" />
          </div>

          {/* Menu - Visible en pantallas medianas y grandes */}
          <nav className="hidden md:flex space-x-8 mx-auto">
          <Link href="/" className="relative text-gray-700 font-semibold hover:text-[#3D58A7] transition-colors duration-300 group">
              <span className="hover-effect">Inicio</span>
            </Link>
            <Link href="/servicios" className="relative text-gray-700 font-semibold hover:text-[#3D58A7] transition-colors duration-300 group">
              <span className="hover-effect">Servicios</span>
            </Link>
            <Link href="/nosotros" className="relative text-gray-700 font-semibold hover:text-[#3D58A7] transition-colors duration-300 group">
              <span className="hover-effect">Nosotros</span>
            </Link>
            <Link href="/destinos" className="relative text-gray-700 font-semibold hover:text-[#3D58A7] transition-colors duration-300 group">
              <span className="hover-effect">Destinos/Horarios</span>
            </Link>
            <Link href="/contactos" className="relative text-gray-700 font-semibold hover:text-[#3D58A7] transition-colors duration-300 group">
              <span className="hover-effect">Contacto</span>
            </Link>
          </nav>

          {/* Botón de hamburguesa para pantallas pequeñas */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menú desplegable en pantallas pequeñas */}
        {isMenuOpen && (
          <div className="absolute top-[80px] left-0 right-0 bg-white shadow-lg z-30 p-4 space-y-2 md:hidden">
             <Link href="/" className="block text-gray-700 font-semibold hover:text-[#3D58A7]">Inicio</Link>
            <Link href="#servicios" className="block text-gray-700 font-semibold hover:text-[#3D58A7]">Servicios</Link>
            <Link href="#nosotros" className="block text-gray-700 font-semibold hover:text-[#3D58A7]">Nosotros</Link>
            <Link href="#destinos" className="block text-gray-700 font-semibold hover:text-[#3D58A7]">Destinos/Horarios</Link>
            <Link href="#contacto" className="block text-gray-700 font-semibold hover:text-[#3D58A7]">Contacto</Link>
          </div>
        )}

        <style jsx>{`
          .hover-effect {
            position: relative;
            display: inline-block;
            padding: 2px 0;
            transition: color 0.3s ease;
          }

          .hover-effect::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #3D58A7;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s ease;
          }

          .hover-effect:hover::after {
            transform: scaleX(1);
            transform-origin: left;
          }
        `}</style>
      </header>
    </>
  );
};

export default Navbar;
