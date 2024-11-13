// src/app/destinos/page.tsx
"use client";

import React, { useState } from 'react';
import { destinos } from '@/data/destinos';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DestinosPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openDestino, setOpenDestino] = useState<string | null>(null);

  // Ordenar destinos alfabéticamente y filtrar por nombre
  const filteredDestinos = destinos
    .filter(destino =>
      destino.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.nombre.localeCompare(b.nombre));

  const toggleAccordion = (nombre: string) => {
    setOpenDestino(openDestino === nombre ? null : nombre);
  };

  return (
    <>
    <Navbar/>
    <div className=" container-fluid mx-auto py-40 ">
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Horarios de Salidas por Destinos</h1>
      
      {/* Campo de búsqueda */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Buscar destino..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-[#212e58] w-full md:w-1/2 p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-4">
        {filteredDestinos.length > 0 ? (
          filteredDestinos.map((destino) => (
            <div key={destino.nombre} className="border border-gray-300 rounded-lg">
              <button
                onClick={() => toggleAccordion(destino.nombre)}
                className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">{destino.nombre}</span>
                  <span>{openDestino === destino.nombre ? "-" : "+"}</span>
                </div>
                <p className="text-sm text-gray-600">
                  {destino.puntoLlegada} - Tarifa: {destino.tarifa}
                </p>
              </button>
              {openDestino === destino.nombre && (
                <div className="p-4 bg-white">
                  <h2 className="text-lg font-semibold mb-2">Horarios</h2>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                    {destino.horarios.map((hora, i) => (
                      <li key={i} className="p-2 border rounded-md text-center">
                        {hora}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No se encontraron destinos con ese nombre.</p>
        )}
      </div>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default DestinosPage;
