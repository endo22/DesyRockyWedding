import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import all images from public/img folder without eager loading
    const imageModules = import.meta.glob('/public/img/*.webp', { as: 'url' });
    const imagePaths = Object.keys(imageModules).map(path => path.replace('/public', ''));
    setImages(imagePaths.sort());
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 px-6 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Our Gallery</h2>
          <div className="w-20 h-[1px] bg-gold mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Scroll buttons - hidden on mobile */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Horizontal scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-scroll pb-4 -mx-6 px-6 md:mx-0 md:px-0"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              overscrollBehaviorX: 'contain',
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <motion.img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
