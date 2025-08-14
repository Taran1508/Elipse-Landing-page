import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import showcase1 from '@/assets/showcase1.jpg';
import showcase2 from '@/assets/showcase2.jpg';
import showcase3 from '@/assets/showcase3.jpg';
import showcase4 from '@/assets/showcase4.jpg';

const showcaseItems = [
  {
    image: showcase1,
    title: "Modern Kitchen",
    category: "Kitchen Design"
  },
  {
    image: showcase2,
    title: "Contemporary Bathroom",
    category: "Bathroom Design"
  },
  {
    image: showcase3,
    title: "Home Office",
    category: "Workspace Design"
  },
  {
    image: showcase4,
    title: "Elegant Dining",
    category: "Dining Room"
  }
];

const ShowcaseSection = () => {
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
            Design <span className="text-text-secondary">Showcase</span>
          </h2>
          
          <p className="section-subheader max-w-2xl mx-auto">
            Explore stunning interior designs created by our community of users
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium opacity-80 mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;