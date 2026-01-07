import { motion } from "framer-motion";
import { MapPin, Clock, Church, PartyPopper } from "lucide-react";

const EventSection = () => {
  const events = [
    {
      icon: Church,
      title: "Pemberkatan",
      date: "Jumat, 23 Januari 2026",
      time: "10:00 WIB - Selesai",
      venue: "Gereja Katholik SPM Kabanjahe",
      address: "Jl. Letnan Rata Perangin-Angin No.13, Gung Leto, Kec. Kabanjahe, Kabupaten Karo, Sumatera Utara 22111",
      mapLink: "https://www.google.com/maps/place/Gereja+Katolik+Paroki+Santa+Perawan+Maria,+Kabanjahe+Gung+Leto/@3.1004848,98.4887474,17z/data=!3m1!4b1!4m6!3m5!1s0x303101d2dd1fec0f:0x2a0617b22a4caef2!8m2!3d3.1004794!4d98.4913223!16s%2Fg%2F1238s6xf?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: PartyPopper,
      title: "Pesta Adat",
      date: "Jumat, 24 Januari 2026",
      time: "10:00 WIB - Selesai",
      venue: "Jambur Milala Mas Kabanjahe",
      address: "Jl. Veteran No.50, Ketaren, Kec. Kabanjahe, Kabupaten Karo, Sumatera Utara 22152",
      mapLink: "https://www.google.com/maps/place/Jambur+Milala/@3.1244231,98.50543,17z/data=!3m1!4b1!4m6!3m5!1s0x3031019540838759:0x90a7b553c12e5914!8m2!3d3.1244177!4d98.5080049!16s%2Fg%2F11dxdyd76y?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4 font-bold">Acara Pernikahan</h2>
          <div className="w-20 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className="p-8 rounded-lg shadow-2xl border border-white/50 text-center"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
              initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.3 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ rotate: 360, scale: 1.1 }}
              >
                <event.icon className="w-8 h-8 text-gold" />
              </motion.div>

              <motion.h3 
                className="font-serif text-2xl text-primary mb-4 font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 + 0.4 }}
              >
                {event.title}
              </motion.h3>
              
              <motion.div 
                className="space-y-3 text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.6 }}
              >
                <p className="font-semibold text-gray-900">{event.date}</p>
                
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-gold" />
                  <span className="font-medium">{event.time}</span>
                </div>
                
                <div className="pt-4 border-t border-gray-300">
                  <p className="font-bold text-gray-900 mb-1">{event.venue}</p>
                  <p className="text-sm font-medium">{event.address}</p>
                </div>
              </motion.div>

              <motion.a
                href={event.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-2 bg-gold text-primary-foreground font-bold rounded-full hover:bg-gold/90 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 + 0.6 }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Google Maps</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
