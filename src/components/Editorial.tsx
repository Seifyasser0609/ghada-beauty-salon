import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const editorialImageA = new URL('../../assets/b2.png', import.meta.url).href;
const editorialImageB = new URL('../../assets/b3.png', import.meta.url).href;

export default function Editorial() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-25%"]);

  return (
    <section ref={containerRef} id="editorial" className="py-32 px-6 md:px-12 lg:px-24 bg-clay text-cloud overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-5 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-light leading-tight mb-8"
            >
              Nature <br/>
              <span className="italic">Distilled</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono text-sm leading-relaxed max-w-md opacity-80 mb-12"
            >
              We believe in the power of raw, unpolished beauty. Our space in Arabella Plaza is designed to be a sanctuary where tactile elegance meets expert care. Every treatment is a ritual, every detail considered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="liquid-button liquid-button-light border border-cloud px-8 py-3 rounded-full font-mono text-xs tracking-widest uppercase self-start">
                Our Philosophy
              </button>
            </motion.div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-4 md:gap-8 mt-16 md:mt-0">
            <motion.div 
              style={{ y: y1 }}
              className="h-[40vh] md:h-[60vh] overflow-hidden rounded-sm"
            >
      <img 
  src={editorialImageA} 
  alt="Ghada Beauty Storefront" 
  loading="lazy"
  className="w-full h-full object-cover"
/>
            </motion.div>
            <motion.div 
              style={{ y: y2 }}
              className="h-[50vh] md:h-[70vh] overflow-hidden rounded-sm mt-12 md:mt-24"
            >
        <img 
  src={editorialImageB} 
  alt="Ghada Beauty Spa" 
  loading="lazy"
  className="w-full h-full object-cover"
/>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
