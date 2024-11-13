// src/components/Destinations.tsx
import DestinationCard from './DestinationCard';
import { destinos } from '@/data/destinos';

const Destinations: React.FC = () => {
  return (
    <section className="py-16 bg-white-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Destinos Populares</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinos.map((dest, index) => (
            <DestinationCard
              key={index}
              destination={dest.nombre}
              arrivalPoint={dest.puntoLlegada}
              price={parseFloat(dest.tarifa.replace("$", ""))} // Convertir tarifa a número sin símbolo de $
              imageUrl={`https://picsum.photos/400/300?random=${index + 1}`} // Generar una imagen aleatoria
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
