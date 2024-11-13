// src/components/ContactForm.tsx
"use client";

declare global {
  interface Window {
    onCaptchaVerified: () => void;
  }
}

import React, { useState, useEffect } from 'react';
import { sendEmail, FormData } from '@/app/utils/sendEmail';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<string>('');
  const [captchaVerified, setCaptchaVerified] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js`;
    script.async = true;
    document.body.appendChild(script);
  
    // Define la función de callback globalmente para que reCAPTCHA la llame
    window.onCaptchaVerified = () => {
      setCaptchaVerified(true);
    };
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaVerified) {
      setStatus('Por favor, completa el CAPTCHA');
      return;
    }

    setStatus('Enviando...');

    try {
      const result = await sendEmail(formData);
      setStatus(result);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('Error al enviar el correo: ' + error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Formulario de Contacto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block font-semibold">Asunto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
            rows={4}
            required
          ></textarea>
        </div>

        {/* reCAPTCHA v2 Checkbox */}
        <div
          className="g-recaptcha"
          data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          data-callback="onCaptchaVerified"
        ></div>

        <button
          type="submit"
          className="bg-[#3D58A7] text-white font-semibold rounded-md px-4 py-2 hover:bg-[#2c4582] transition-colors"
        >
          Enviar Mensaje
        </button>
        {status && <p className="mt-4 text-gray-700">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
