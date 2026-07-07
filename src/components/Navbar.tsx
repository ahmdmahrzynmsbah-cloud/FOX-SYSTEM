import { motion } from 'motion/react';
import { Hexagon } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#000B1D]/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-fox rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 rotate-12">
              <span className="text-2xl font-bold text-white -rotate-12">F</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">FOX <span className="text-cyan-400">SYSTEM</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
            {[{ name: 'المميزات', href: '#features' }, { name: 'المقارنة', href: '#comparison' }, { name: 'الباقات', href: '#pricing' }, { name: 'الأسئلة الشائعة', href: '#faq' }].map((link) => (
              <a key={link.href} href={link.href} className="relative group hover:text-white transition-colors py-1">
                {link.name}
                <span className="absolute bottom-0 right-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300 ease-out" />
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <a 
              href="https://wa.me/201034859313" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-6 sm:py-2.5 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md hover:bg-white/10 transition-all text-white whitespace-nowrap"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
