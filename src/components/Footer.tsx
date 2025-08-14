import { motion } from "framer-motion";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">Elipse.</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Transform your living spaces with professional 3D interior design
              tools. Create, customize, and visualize your dream home with
              Unity-powered technology.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-foreground/60" />
                <a
                  href="mailto:contact@yourapp.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  support@elipse.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-foreground/60" />
                <a
                  href="tel:+91-XXXXXXXXXX"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  +91-9248099990
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-12 pt-8 text-center"
        >
          <p className="text-primary-foreground/60">
            © 2025 Elipse. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
