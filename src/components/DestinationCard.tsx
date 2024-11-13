// src/components/DestinationCard.tsx
"use client";

import { useState } from 'react';

const DestinationCard: React.FC<{ destination: string; arrivalPoint: string; price: number; imageUrl: string }> = ({ destination, arrivalPoint, price, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-lg">
      {/* Imagen de fondo */}
      <img src={imageUrl} alt={destination} className="w-full h-full object-cover" />
      
      {/* Información de destino */}
      <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end text-white">
        <h3 className="text-xl font-bold mb-2">{destination}</h3>
        
        {/* Botón de revisar detalles compacto */}
        <button
          onClick={openModal}
          className="bg-[#3D58A7] text-white py-1 px-4 rounded-md hover:bg-[#2a3d6f] transition self-start"
        >
          Revisa los detalles
        </button>
      </div>

      {/* Modal de detalles */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">&times;</button>
            <h2 className="text-2xl font-bold mb-4">{destination}</h2>
            <p className="text-gray-700 mb-4">Punto de llegada: {arrivalPoint}</p>
            <p className="text-lg font-semibold">Precio del pasaje: {price} DOP</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-[#3D58A7] text-white py-1 px-4 rounded-md hover:bg-[#2a3d6f] transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationCard;
