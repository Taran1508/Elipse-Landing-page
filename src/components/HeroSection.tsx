import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import heroInterior from "@/assets/hero-interior.jpg";
import { Smartphone, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <Parallax speed={-20} className="absolute inset-0">
        <div
          className="w-full h-[120vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroInterior})` }}
        />
        <div className="gradient-overlay" />
      </Parallax>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="section-header mb-6 text-text-primary">
            Design Your Space.
            <br />
            <span className="text-text-secondary">Anytime. Anywhere.</span>
          </h1>

          <p className="section-subheader mb-12 max-w-2xl mx-auto">
            Create stunning 3D interior designs with Unity-powered experiences.
            Transform any room with professional-grade tools right from your
            mobile device.
          </p>

          {/* App Store Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-hero flex items-center gap-3"
            >
              <Download size={20} />
              Download on App Store
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-hero-outline flex items-center gap-3"
            >
              <Smartphone size={20} />
              Get it on Google Play
            </motion.button>
          </div> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-text-muted rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
