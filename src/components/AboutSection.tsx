import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Home, Eye } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: "Real-time 3D Editing",
    description: "See your changes instantly with our Unity-powered 3D visualization engine"
  },
  {
    icon: Palette,
    title: "Custom Furniture",
    description: "Choose from thousands of furniture pieces and customize colors, materials, and textures"
  },
  {
    icon: Home,
    title: "Room Visualization",
    description: "Preview your entire space in photorealistic detail before making any purchases"
  }
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-header mb-6">
            Professional Interior Design
            <br />
            <span className="text-text-secondary">In Your Pocket</span>
          </h2>
          
          <p className="section-subheader max-w-3xl mx-auto">
            Our cutting-edge mobile app combines the power of Unity 3D with intuitive design tools, 
            giving you the ability to create stunning interior spaces wherever inspiration strikes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="feature-card text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon size={32} className="text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                {feature.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;