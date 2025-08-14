import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import step1Room from '@/assets/step1-room.jpg';
import step2Customize from '@/assets/step2-customize.jpg';
import step3Share from '@/assets/step3-share.jpg';

const steps = [
  {
    number: "01",
    title: "Choose your room",
    description: "Start by selecting your room type and dimensions. Our intelligent room scanner helps you create accurate 3D models.",
    image: step1Room,
    reverse: false
  },
  {
    number: "02", 
    title: "Customize colors and furniture",
    description: "Browse our extensive catalog of furniture and materials. Mix and match colors, textures, and styles in real-time.",
    image: step2Customize,
    reverse: true
  },
  {
    number: "03",
    title: "Save & share designs",
    description: "Export high-quality renders and share your designs with friends, family, or contractors instantly.",
    image: step3Share,
    reverse: false
  }
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="section-header mb-6">
            How It <span className="text-text-secondary">Works</span>
          </h2>
          
          <p className="section-subheader max-w-2xl mx-auto">
            Three simple steps to transform your space with professional 3D interior design
          </p>
        </motion.div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                step.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="flex-1 relative">
                <Parallax speed={-5}>
                  <div className="relative overflow-hidden rounded-3xl shadow-xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                </Parallax>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-2xl font-bold text-xl mb-6">
                  {step.number}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-lg text-text-secondary leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;