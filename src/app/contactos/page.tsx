// src/app/contactos/page.tsx
import React from 'react';
import ContactInfo from '../../components/ContactInfo';

import ContactForm from '../../components/ContactForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const ContactosPage: React.FC = () => {
  return (
    <>
    <Navbar />
    
    <div className="bg-gray-100 container-fluid mx-auto py-40 ">
    <div className="container mx-auto px-4 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contáctanos</h1>
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactInfo />
        <ContactForm />
       
      </div>
    
    </div>
    </div>
    <Footer />
        </>
  );
};

export default ContactosPage;
