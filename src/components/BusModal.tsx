// src/components/BusModal.tsx
import React from 'react';

interface Bus {
  id: number;
  color: string;
  destination: string;
  arrivalPoint: string;
  departureDateTime: string;
}

interface BusModalProps {
  bus: Bus;
  timeRemaining: number;
  onClose: () => void;
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

const BusModal: React.FC<BusModalProps> = ({ bus, timeRemaining, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Autobús {bus.color}</h2>
        <p className="mb-4">Tiempo restante para salida: {formatTime(timeRemaining)}</p>
        <p className="mb-4">Hora de salida: {new Date(bus.departureDateTime).toLocaleTimeString()}</p>
        <p className="mb-4">Destino: {bus.destination}</p>
        <p className="mb-4">Punto de Llegada: {bus.arrivalPoint}</p>
      </div>
    </div>
  );
};

export default BusModal;
