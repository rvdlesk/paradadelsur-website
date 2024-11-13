// src/components/ContactSection.tsx
const ContactSection: React.FC = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-start px-4">
          
          {/* Información de Contacto */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contáctanos</h2>
            <p className="text-lg text-gray-700 mb-4">Estamos aquí para ayudarte. Puedes contactarnos usando los siguientes métodos:</p>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Dirección:</span> <a href='https://www.waze.com/en/live-map/directions/parada-del-sur-avenida-duarte-135-villa-consuelo?place=w.190120121.1901266744.7352870' target='_blank'>Avenida Duarte #135, Villa Consuelo, Distrito Nacional, República Dominicana</a>
              </li>
              <li>
                <span className="font-semibold">Teléfono:</span> <a href='tel:8096874283' target='_blank'>809-687-4283</a>
              </li>
              <li>
                <span className="font-semibold">Correo Electrónico:</span> <a href='mailto:paradadelsur@gmail.com' target='_blank'>paradadelsur@gmail.com</a>
              </li>
            </ul>
          </div>
  
          {/* Mapa */}
          <div className="md:w-1/2 h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.703837556353!2d-69.9378056848209!3d18.48229438742639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea56957e1c8e73f%3A0x2e3c915ecf76f835!2sCalle%20Principal%20%23123%2C%20Santo%20Domingo%2C%20Rep%C3%BAblica%20Dominicana!5e0!3m2!1ses!2sdo!4v1637943910105!5m2!1ses!2sdo"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  