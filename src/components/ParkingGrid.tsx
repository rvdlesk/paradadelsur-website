// src/components/ParkingGrid.tsx
"use client";

import React, { useEffect, useState } from 'react';
import ParkingCard from './ParkingCard';
import BusModal from './BusModal';


interface Bus {
  id: number;
  color: string;
  departureDateTime: string;
  destination: string;
  arrivalPoint: string;

}


const ParkingGrid: React.FC = () => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<{ [key: number]: number }>({});
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);

  useEffect(() => {
    const fetchBuses = () => {
      const now = new Date();
      const generatedBuses: Bus[] = Array.from({ length: 6 }, (_, index) => {
        // Genera una probabilidad de que el tiempo de salida sea crítico (1-10 minutos)
        const isCritical = Math.random() < 0.3; // 30% de probabilidad de ser crítico
        const randomMinutes = isCritical
          ? Math.floor(Math.random() * 10) + 1 // Entre 1 y 10 minutos
          : Math.floor(Math.random() * 45) + 15; // Entre 15 y 60 minutos

        const departureDateTime = new Date(now.getTime() + randomMinutes * 60000).toISOString();

        return {
          id: index + 1,
          color: ["blanco", "amarillo", "blanco", "blanco", "rojo", "azul"][index % 6],
          departureDateTime,
          destination: ["San Juan", "Elías Piña", "Hondo Valle", "Bánica", "El Cercado", "Vallejuelo"][index % 6],
    arrivalPoint: ["C/ 16 de Agosto esq. 27 de Febrero #37", "C/ Sanchez frente a la Cooperativa Central", "C/ Sanchez. Parque frente a la Duarte", "C/ Principal y a Domicilio", "C/ Duarte y a Domicilio", "C/ Independencia y a Domicilio"][index % 6],
        };
      });

      // Simulamos recibir los datos en formato JSON
      const responseData = JSON.stringify(generatedBuses);
      const parsedData = JSON.parse(responseData); // Esto simula la respuesta de una API real
      setBuses(parsedData);

      const initialTimeRemaining = parsedData.reduce((acc: { [key: number]: number }, bus: Bus) => {
        const timeLeft = calculateTimeRemaining(bus.departureDateTime);
        acc[bus.id] = timeLeft;
        return acc;
      }, {});

      setTimeRemaining(initialTimeRemaining);
    };

    fetchBuses();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTimes) => {
        const updatedTimes = { ...prevTimes };
        buses.forEach((bus) => {
          updatedTimes[bus.id] = calculateTimeRemaining(bus.departureDateTime);
        });
        return updatedTimes;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [buses]);

  const calculateTimeRemaining = (departureDateTime: string): number => {
    const departureTime = new Date(departureDateTime).getTime();
    const currentTime = new Date().getTime();
    const timeLeft = Math.max(departureTime - currentTime, 0);
    return Math.floor(timeLeft / 1000); // Tiempo en segundos
  };

  const handleBusClick = (bus: Bus) => {
    setSelectedBus(bus);
  };

  const closeModal = () => {
    setSelectedBus(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {buses.map((bus) => (
        <ParkingCard
          key={bus.id}
          bus={bus}
          timeRemaining={timeRemaining[bus.id]}
          onClick={() => handleBusClick(bus)}
        />
      ))}

      {selectedBus && (
        <BusModal
          bus={selectedBus}
          timeRemaining={timeRemaining[selectedBus.id]}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ParkingGrid;
