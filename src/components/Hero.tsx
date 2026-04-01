import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const heroImage = new URL('../../assets/b1.png', import.meta.url).href;

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <img 
          src={heroImage} 
          alt="Ghada Beauty Interior" 
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft overlay to ensure text readability while keeping the natural look */}
        <div className="absolute inset-0 bg-moss/20 mix-blend-multiply"></div>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-cloud mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-7xl md:text-9xl lg:text-[12rem] font-light tracking-tighter leading-none"
        >
          GHADA
        </motion.h1>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-7xl md:text-9xl lg:text-[12rem] font-light tracking-tighter leading-none italic"
        >
          BEAUTY
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-col items-center"
        >
          <p className="font-mono text-sm tracking-widest uppercase mb-6">Arabella Plaza</p>
          <button 
  onClick={() => alert('Booking functionality coming soon – please call +20 123 456 7890')}
  className="liquid-button liquid-button-light border border-cloud px-8 py-3 rounded-full font-mono text-xs tracking-widest uppercase"
>
  Book Appointment
</button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cloud flex flex-col items-center"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-cloud/50 overflow-hidden">
          <motion.div 
            className="w-full h-full bg-cloud"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
