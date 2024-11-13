// src/components/Map.tsx
import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden my-4">
      <iframe src="https://embed.waze.com/iframe?zoom=16&lat=18.484636&lon=-69.892532&ct=livemap&pin=1" width="100%"
        height="400"
        allowFullScreen={true}
        loading="lazy"
          title="Ubicación de Parada del Sur"
        ></iframe>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8031024172316!2d-69.89087228509978!3d18.470317074151527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea56a82343bd4f3%3A0x3c0e594b8ef8cd7a!2sCalle%20Principal%20%23123%2C%20Santo%20Domingo!5e0!3m2!1ses!2sdo!4v1618325846821!5m2!1ses!2sdo"
        width="100%"
        height="400"
        allowFullScreen={true}
        loading="lazy"
        // className="w-full h-full"
        title="Ubicación de Parada del Sur"
      ></iframe> */}
    </div>
  );
};

export default Map;
