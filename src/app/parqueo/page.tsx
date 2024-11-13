// src/app/parqueo/page.tsx
import React from 'react';
import ParkingGrid from '../../components/ParkingGrid';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ParqueoPage: React.FC = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-100 container-fluid mx-auto py-40 ">
    <div className="container mx-auto py-20 px-4 	">
      <h1 className="text-4xl font-bold text-center mb-8">Simulación de Parqueo</h1>
      <ParkingGrid />
    </div>
    </div>
    <Footer />
    </>
  );
};

export default ParqueoPage;
