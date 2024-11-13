// src/components/HeroCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const slides = [
  {
    image: "https://picsum.photos/1600/600?random=1",
    title: "Confort y Seguridad",
    description: "Viaja cómodamente y con la mejor seguridad en todos nuestros recorridos."
  },
  {
    image: "https://picsum.photos/1600/600?random=2",
    title: "Confort y Seguridad",
    description: "Viaja cómodamente y con la mejor seguridad en todos nuestros recorridos."
  },
  {
    image: "https://picsum.photos/1600/600?random=3",
    title: "",
    description: ""
  }
];

const HeroCarousel: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden">
              {/* Imagen de fondo */}
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover slow-zoom"
              />
              {/* Capa de oscurecimiento sobre la imagen */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              {/* Contenedor del título y descripción centrado */}
              {(slide.title || slide.description) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  {slide.title && <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">{slide.title}</h2>}
                  {slide.description && <p className="text-2xl md:text-3xl text-white">{slide.description}</p>}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        /* Keyframes para el efecto de zoom in lento */
        @keyframes slowZoomIn {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        /* Aplicar la animación de zoom in continuo a cada slide */
        .slow-zoom {
          animation: slowZoomIn 20s ease forwards;
        }

        /* Estilos personalizados para las flechas de navegación */
        .swiper-button-next,
        .swiper-button-prev {
          color: white; /* Cambia el color de las flechas a blanco */
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: rgba(255, 255, 255, 0.7); /* Efecto hover en las flechas */
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
