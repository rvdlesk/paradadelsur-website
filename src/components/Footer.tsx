// src/components/Footer.tsx
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        
        {/* Información de Contacto */}
        <div>
          <h3 className="text-white-400 text-lg font-semibold mb-4">Contacto</h3>
          <p className="mb-2 text-white">📍  <a className="hover:text-gray-400" href='https://www.waze.com/en/live-map/directions/parada-del-sur-avenida-duarte-135-villa-consuelo?place=w.190120121.1901266744.7352870' target='_blank'> Avenida Duarte #135, Villa Consuelo, Distrito Nacional, República Dominicana</a></p>
          <p className="mb-2 text-white">☎ <a className="hover:text-gray-400" href='tel:8096874283' target='_blank'>809-687-4283</a></p>
          <p className="mb-2 text-white">📧 <a className="hover:text-gray-400" href='mailto:paradadelsur@gmail.com' target='_blank'>paradadelsur@gmail.com</a></p>
        </div>

        {/* Navegación Rápida */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navegación</h3>
          <ul>
          <li className="text-white mb-2">
              <Link href="#servicios" className="hover:text-gray-400">Inicio</Link>
            </li>
            <li className="text-white mb-2">
              <Link href="/servicios" className="hover:text-gray-400">Servicios</Link>
            </li>
            <li className="text-white mb-2">
              <Link href="/nosotros" className="hover:text-gray-400">Nosotros</Link>
            </li>
            <li className="text-white mb-2">
              <Link href="/destinos" className="hover:text-gray-400">Destinos</Link>
            </li>
            <li className="text-white mb-2">
              <Link href="/contactos" className="hover:text-gray-400">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/ParadaDelSur/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="https://www.instagram.com/paradadelsur" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Parada del Sur. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
