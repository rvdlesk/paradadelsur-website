// src/components/AboutUs.tsx
const AboutUs: React.FC = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8 px-4">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre Nosotros</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
            Transporte y Servicios E.L. Parada del Sur es una empresa familiar comprometida con ofrecer el mejor servicio de transporte en la región sur de la República Dominicana. Fundada en 1974 por el empresario Luis Lara, conocido como “YuYu”, Parada del Sur nació con la misión de conectar comunidades a través de un transporte confiable y de calidad. Hoy, seguimos su legado, siendo la estación de autobuses más importante de la región y brindando servicio a más de 15 destinos.
            </p>
            <p className="text-gray-700 leading-relaxed">
            Con una trayectoria de excelencia en el sector, Parada del Sur se esfuerza cada día en brindar comodidad, seguridad y satisfacción a sus clientes. Nos enorgullece ser un referente en el transporte de la región sur, innovando constantemente y adaptándonos a las necesidades de quienes confían en nosotros para llegar a sus destinos de forma segura y eficiente.            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://picsum.photos/600/400?random=4"
              alt="Sobre nosotros"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  