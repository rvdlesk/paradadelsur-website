// src/components/BackToTopButton.tsx
"use client";

import { useEffect, useState } from 'react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#3D58A7] text-white p-3 rounded-full shadow-lg hover:bg-[#2a3d6f] transition"
        aria-label="Back to Top"
      >
        <i className="ri-arrow-up-s-line text-2xl"></i>
      </button>
    )
  );
};

export default BackToTopButton;
