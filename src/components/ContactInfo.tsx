// src/components/ContactInfo.tsx
import React from 'react';
import Map
 from './Map';
const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
      <p className="mb-2">📍 <a href='https://www.waze.com/en/live-map/directions/parada-del-sur-avenida-duarte-135-villa-consuelo?place=w.190120121.1901266744.7352870' target='_blank'>Avenida Duarte #135, Villa Consuelo, Distrito Nacional</a></p>
      <p className="mb-2">☎ <a href='tel:8096874283' target='_blank'>809-687-4283</a></p>
      <p className="mb-2">📧 <a href='mailto:paradadelsur@gmail.com' target='_blank'>paradadelsur@gmail.com</a></p>
      <p className="mb-2">🕒 Lunes - Viernes: 5:00 AM - 8:00 PM</p>
      <Map />
    </div>
  );
};

export default ContactInfo;
