import CountUp from 'react-countup';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const stats = [
  { label: 'طالب', value: 750, suffix: '+' },
  { label: 'سنتر تعليمي', value: 12, suffix: '+' },
  { label: 'استقرار النظام', value: 99.9, suffix: '%' },
  { label: 'دعم فني', value: 24, suffix: '/7' },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative border-t border-b border-white/10 bg-white/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-10 md:gap-16">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 flex items-center flex-row-reverse justify-center ${index === 2 ? 'text-cyan-400' : 'text-white'}`}>
                  <span>{stat.suffix}</span>
                  {isInView && (
                    <CountUp 
                      start={0} 
                      end={stat.value} 
                      duration={2.5} 
                      decimals={stat.value % 1 !== 0 ? 1 : 0} 
                    />
                  )}
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</p>
              </motion.div>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-16 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
