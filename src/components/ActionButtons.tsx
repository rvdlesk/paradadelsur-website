// src/components/ActionButtons.tsx
import Link from 'next/link';

const ActionButtons: React.FC = () => {
    return (
      <section className="flex justify-center space-x-4 py-8 bg-gray-100 relative overflow-hidden curved-bottom">
        <Link href="/destinos" passHref>
          <button className="flex items-center bg-[#ED1C25] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#b9141a] transition">
            <i className="ri-map-pin-line mr-2 text-lg"></i>
            Destinos
          </button>
        </Link>
        <Link href="/parqueo" passHref>
          <button className="flex items-center bg-[#3D58A7] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#2a3d6f] transition">
            <i className="ri-parking-box-line mr-2 text-lg"></i>
            Parqueo en Tiempo Real
          </button>
        </Link>
      </section>
    );
  };
  
export default ActionButtons;
