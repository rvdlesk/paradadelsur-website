// src/components/Services.tsx
const services = [
    {
      icon: "ri-bus-wifi-line",
      title: "Transporte Seguro",
      description: "Ofrecemos servicios de transporte con altos estándares de seguridad y comodidad para todos nuestros usuarios."
    },
    {
      icon: "ri-box-3-line",
      title: "Mensajería y Paquetería",
      description: "Cubrimos una gran variedad de destinos para que puedas llegar a donde necesitas sin complicaciones."
    }
  ];
  
  const Services: React.FC = () => {
    return (
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Nuestros Servicios</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <i className={`${service.icon} text-6xl text-[#3D58A7] mb-4`}></i>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;
  