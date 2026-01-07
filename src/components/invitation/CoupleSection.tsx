import { motion } from "framer-motion";

const CoupleSection = () => {
  return (
    <section 
      className="py-20 px-6 bg-fixed bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/PRIM3257.webp')`
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Bride & Groom</h2>
          <div className="w-20 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Groom */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="relative mb-6 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Frame container */}
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-[2.5rem] p-3 border-4 border-white/40 shadow-2xl"
                initial={{ rotateY: -90, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
                  borderColor: "rgba(255, 215, 0, 0.6)"
                }}
              >
                {/* Photo */}
                <motion.div 
                  className="w-56 h-72 md:w-64 md:h-80 rounded-[2rem] overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/img/DSC06604.webp" 
                    alt="Rocky FJ Pinem"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
              {/* Name tag */}
              <motion.div 
                className="absolute -bottom-3 left-1/2 -translate-x-1/2"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(255,215,0,0.8)" }}
              >
                <p className="font-serif text-3xl md:text-4xl text-white drop-shadow-lg" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                  Rocky
                </p>
              </motion.div>
            </motion.div>
            
            <motion.h3 
              className="font-serif text-2xl md:text-3xl text-white mt-12 mb-3 font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Rocky FJ Pinem
            </motion.h3>
            <motion.p 
              className="text-white/90 leading-relaxed font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Putra dari:<br />
              <span className="font-semibold">Nasibta Pinem</span><br />
              &<br />
              <span className="font-semibold">Serta Br Ginting (+)</span>
            </motion.p>
          </motion.div>

          {/* Bride */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="relative mb-6 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Frame container */}
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-[2.5rem] p-3 border-4 border-white/40 shadow-2xl"
                initial={{ rotateY: 90, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
                  borderColor: "rgba(255, 215, 0, 0.6)"
                }}
              >
                {/* Photo */}
                <motion.div 
                  className="w-56 h-72 md:w-64 md:h-80 rounded-[2rem] overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/img/DSC06610.webp" 
                    alt="Desy Marthalina Br Tarigan"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
              {/* Name tag */}
              <motion.div 
                className="absolute -bottom-3 left-1/2 -translate-x-1/2"
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(255,215,0,0.8)" }}
              >
                <p className="font-serif text-3xl md:text-4xl text-white drop-shadow-lg" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                  Desy
                </p>
              </motion.div>
            </motion.div>
            
            <motion.h3 
              className="font-serif text-2xl md:text-3xl text-white mt-12 mb-3 font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Desy Marthalina Br Tarigan
            </motion.h3>
            <motion.p 
              className="text-white/90 leading-relaxed font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              Putri dari:<br />
              <span className="font-semibold">Dekon Tarigan</span><br />
              &<br />
              <span className="font-semibold">Sumiyati Br Sembiring (+)</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
