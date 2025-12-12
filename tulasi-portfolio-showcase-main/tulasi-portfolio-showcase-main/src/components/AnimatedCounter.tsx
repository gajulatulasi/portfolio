
import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  label: string;
  description?: string;
}

export function AnimatedCounter({ 
  from = 0, 
  to, 
  duration = 2, 
  label, 
  description 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const increment = (to - from) / (duration * 60);
      let current = from;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current * 100) / 100);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, from, to, duration]);

  const displayValue = to === 9.52 ? count.toFixed(2) : `${Math.floor(count)}+`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center p-6 glass-effect rounded-lg"
    >
      <div className="text-3xl font-bold gradient-text mb-2">
        {displayValue}
      </div>
      <div className="text-lg font-semibold text-white mb-1">{label}</div>
      {description && (
        <div className="text-sm text-gray-400">{description}</div>
      )}
    </motion.div>
  );
}
