// src/app/page.tsx

import HeroCarousel from '@/components/HeroCarousel';
import ActionButtons from '@/components/ActionButtons';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import Destinations from '@/components/Destinations';
import ContactSection from '@/components/ContactSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <ActionButtons />
      <Services />
      <AboutUs />
      <Destinations />
      <ContactSection />
      <Footer />
      <BackToTopButton />

    </div>
  );
};

export default HomePage;
