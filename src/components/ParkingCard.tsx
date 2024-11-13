// src/components/ParkingCard.tsx
import React from 'react';

interface Bus {
  id: number;
  color: string;
  destination: string;
  arrivalPoint: string;

}

interface ParkingCardProps {
  bus: Bus;
  timeRemaining: number;
  onClick: () => void;
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

const ParkingCard: React.FC<ParkingCardProps> = ({ bus, timeRemaining, onClick }) => {
  const borderColorClass = timeRemaining <= 600 ? "border-red-500" : timeRemaining <= 1800 ? "border-yellow-500" : "border-green-500";

  return (
    <div
      className={`bg-[#3D58A7] text-white rounded-lg flex items-center justify-between p-4 border-4 ${borderColorClass} cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex flex-col mr-1">
        {/* <span className="text-xs">Parqueo</span> */}
        <span className=" text-white text-2xl font-bold mr-2">#{bus.id}</span>
      </div>
      <div className="flex flex-col text-left">
        <span className="text-white  text-lg font-semibold">{bus.destination}</span>
        <span className="text-white  text-sm">{bus.arrivalPoint}</span>
      </div>
      <div className="text-4xl font-bold text-gray-400">
        {formatTime(timeRemaining)}
      </div>
      <img src={`/buses/${bus.color}-bus.png`} alt={`Autobús ${bus.color}`} className="h-16 ml-4" />
    </div>
  );
};

export default ParkingCard;
