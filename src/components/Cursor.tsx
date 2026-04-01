import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState<'default' | 'button' | 'service'>('default');
  const [servicePreview, setServicePreview] = useState<string | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const serviceItem = target.closest('[data-service-preview]');
      if (serviceItem) {
        setHoverState('service');
        setServicePreview(serviceItem.getAttribute('data-service-preview'));
        return;
      }

      if (target.closest('button, a, .liquid-button')) {
        setHoverState('button');
        return;
      }

      setHoverState('default');
      setServicePreview(null);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Only show custom cursor on devices with fine pointers (mouse)
  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden rounded-full border border-cloud/30 bg-cloud/20 shadow-xl backdrop-blur-sm"
      animate={{
        x: mousePosition.x - (hoverState === 'service' ? 90 : hoverState === 'button' ? 24 : 12),
        y: mousePosition.y - (hoverState === 'service' ? 90 : hoverState === 'button' ? 24 : 12),
        width: hoverState === 'service' ? 180 : hoverState === 'button' ? 48 : 24,
        height: hoverState === 'service' ? 180 : hoverState === 'button' ? 48 : 24,
        opacity: hoverState === 'service' ? 1 : 0.95,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.5 }}
    >
      {hoverState === 'service' && servicePreview ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full rounded-full overflow-hidden border border-cloud/20 shadow-2xl bg-cloud"
        >
          <img 
            src={servicePreview} 
            alt="Service preview" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      ) : (
        <motion.div
          className="w-2/5 h-2/5 rounded-full bg-moss shadow-sm"
          animate={{ opacity: hoverState === 'button' ? 1 : 0.85 }}
        />
      )}
    </motion.div>
  );
}
