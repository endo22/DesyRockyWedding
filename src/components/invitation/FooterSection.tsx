import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer 
      className="py-16 px-6 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/img/DSC06678.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="font-serif text-3xl md:text-4xl mb-6 text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            Thank You
          </motion.h2>
          
          <motion.p 
            className="text-white/80 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila 
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
          </motion.p>

          <motion.div 
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="w-12 h-[1px] bg-gold-light" />
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-5 h-5 text-gold-light fill-gold-light" />
            </motion.div>
            <div className="w-12 h-[1px] bg-gold-light" />
          </motion.div>

          <motion.h3 
            className="font-serif text-2xl md:text-3xl mb-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Rocky FJ Pinem & Desy Marthalina Br Tarigan
          </motion.h3>
          
          <motion.p 
            className="text-sm text-white/60 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            © 2026 Endo Febranda Silalahi
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
