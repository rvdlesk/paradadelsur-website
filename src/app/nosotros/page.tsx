// src/app/nosotros/page.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const NosotrosPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 container-fluid mx-auto py-40 ">
      <div className="container mx-auto px-4">
     

        {/* Historia */}
        <section className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
          {/* eslint-disable @next/next/no-img-element */}
            <img
              src="https://picsum.photos/600/400?random=4" // Asegúrate de reemplazar esta ruta con la ubicación real de la imagen
              alt="Nuestra Historia"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {/* eslint-enable @next/next/no-img-element */}

          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              Transporte y Servicios E.L. Parada del Sur es una empresa familiar
              con profundas raíces en el transporte y desarrollo de la región
              sur de la República Dominicana. Fundada en 1974 por el empresario
              Luis Lara, conocido cariñosamente como “YuYu,” Parada del Sur fue
              el siguiente gran paso en su legado de servicio, tras el icónico
              Parador Cruce de Ocoa. Su visión de conectar las comunidades del
              sur mediante un transporte confiable y de calidad fue el pilar de
              una empresa que, hoy en día, es la estación de autobuses más
              importante de la región, ofreciendo servicio a más de 15 destinos
              distintos.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              Con el paso del tiempo, Parada del Sur ha fortalecido su
              compromiso de brindar una experiencia de viaje excepcional. A
              través de una alianza estratégica con el Parador Cruce de Ocoa,
              todas nuestras unidades de transporte hacen una parada en este
              emblemático establecimiento, asegurando que cada pasajero reciba
              las mejores atenciones y servicios en su viaje.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              En nuestra terminal de Santo Domingo, nuestros clientes encuentran
              una amplia gama de servicios y comodidades, que incluyen una
              cafetería, una banca de lotería, una tienda de móviles y
              accesorios electrónicos, así como un servicio de mensajería y
              envíos de paquetes hacia los diferentes destinos de nuestros
              autobuses. Esta combinación de servicios hace de Parada del Sur un
              centro de transporte y servicios esencial para la región sur.
            </p>
          </div>
        </section>

        {/* Misión */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Misión</h2>
          <p className="text-gray-700 leading-relaxed">
          Proveer el mejor servicio de transporte público a la región sur de la República Dominicana, garantizando a nuestros pasajeros una experiencia de viaje segura, rápida y de alta calidad. Nos comprometemos a contribuir al desarrollo turístico y comercial de la región, siendo un puente que conecta a las comunidades con sus destinos.

          </p>
        </section>

        {/* Visión */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Visión</h2>
          <p className="text-gray-700 leading-relaxed">
          Convertirnos en el principal proveedor de transporte público en la región sur del país, estableciendo terminales propias en cada uno de nuestros destinos y promoviendo el desarrollo de la región como un destino turístico y comercial clave. Nuestra visión es impulsar el crecimiento económico y social de la región a través de un servicio de transporte eficiente y accesible.

          </p>
        </section>

        {/* Valores */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Valores</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">Excelencia en el Servicio:</span> Nos esforzamos por ofrecer una atención de calidad que garantice la comodidad y satisfacción de nuestros pasajeros en cada viaje.

            </li>
            <li>
              <span className="font-semibold">Seguridad:</span>  La seguridad de nuestros pasajeros es nuestra máxima prioridad. Implementamos rigurosos protocolos para asegurar que cada viaje sea seguro y confiable.

            </li>
            <li>
              <span className="font-semibold">Rapidez y Eficiencia:</span> Nos comprometemos a ofrecer un servicio de transporte rápido y puntual, respetando los horarios para satisfacer las expectativas de nuestros clientes.

            </li>
            <li>
              <span className="font-semibold">Compromiso con la Comunidad:</span>Trabajamos de la mano con las comunidades del sur, apoyando el turismo y el comercio local para contribuir al crecimiento y desarrollo de la región.

            </li>
            <li>
              <span className="font-semibold">Innovación y Mejora Continua:</span>  Nos adaptamos constantemente a las necesidades cambiantes de nuestros pasajeros y del mercado, buscando siempre mejorar y expandir nuestros servicios.

            </li>
            <li>
              <span className="font-semibold">Integridad:</span> Actuamos con honestidad y transparencia en todas nuestras operaciones, cultivando relaciones de confianza con nuestros pasajeros, empleados y socios.


            </li>
          </ul>
        </section>

        {/* Equipo Administrativo */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Equipo Administrativo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Perfil 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Edward Lara Madera
              </h3>
              <p className="text-lg text-gray-600 mb-2">Gerente General</p>
              <p className="text-gray-700 leading-relaxed">
                Con estudios en Administración de Empresas y Negocios
                Internacionales por la Universidad Iberoamericana y la
                Universidad Internacional de Florida, y un MBA en Dirección de
                la Pequeña y Mediana Empresa de INSA Barcelona, Edward Lara
                representa la tercera generación de emprendedores al frente de
                Parada del Sur. Desde que asumió el cargo de Gerente General en
                2014, ha incrementado los ingresos de la empresa en un 400%,
                diversificando los servicios y creando nuevas fuentes de
                ingresos, como la cafetería, barbería, y servicios de mensajería
                y paquetería. Su liderazgo continúa impulsando el legado
                familiar con un compromiso inquebrantable hacia la calidad y
                expansión de los servicios de transporte en la región.
              </p>
            </div>

            {/* Perfil 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Edward Lara Martínez
              </h3>
              <p className="text-lg text-gray-600 mb-2">Presidente</p>
              <p className="text-gray-700 leading-relaxed">
                Licenciado en Administración de Empresas por la Universidad
                Nacional Pedro Henríquez Ureña, Edward Lara Martínez es la
                segunda generación al mando de Parador Cruce de Ocoa, empresa
                hermana de Parada del Sur. Su experiencia de más de 30 años en
                el sector transporte y en la industria avícola ha sido
                fundamental para el crecimiento de ambos negocios familiares.
                Como presidente, Edward ha implementado innovaciones que han
                renovado la imagen del Parador Cruce de Ocoa, ampliando la
                oferta de servicios y consolidando el compromiso con la
                excelencia en el servicio al cliente.
              </p>
            </div>
          </div>
        </section>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default NosotrosPage;
