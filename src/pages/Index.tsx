import { ParallaxProvider } from 'react-scroll-parallax';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-background font-inter">
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <ShowcaseSection />
        <CTASection />
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default Index;
