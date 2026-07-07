import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Users, CreditCard, Calendar, BarChart3, Settings, Bell, Search, Menu, Home, CheckCircle2, MoreVertical, TrendingUp, BookOpen, GraduationCap, Maximize2, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Screenshots() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden border-t border-white/10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black mb-4">
            نظرة من داخل النظام
          </h2>
          <p className="text-lg text-gray-400 font-medium">
            اكتشف واجهات FOX System المصممة بعناية لتوفير تجربة مستخدم سلسة، سريعة، ومريحة للعين في إدارة سنترك التعليمي.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-4 md:p-8 aspect-[4/3] md:aspect-video shadow-2xl flex flex-col border border-white/10 max-w-5xl mx-auto"
        >
            {/* Window Header */}
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <div 
                className="flex items-center gap-2 cursor-pointer group py-2 pr-2 -my-2 -mr-2" 
                onClick={() => setIsExpanded(true)}
                title="تكبير الشاشة"
              >
                <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80 group-hover:bg-amber-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 group-hover:bg-green-400 transition-colors flex items-center justify-center">
                  <Maximize2 className="w-2 h-2 text-green-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="px-4 py-1.5 bg-white/5 rounded-full text-xs text-gray-400 font-mono border border-white/10 select-none blur-[4px] opacity-60">
                fox-system.com/dashboard
              </div>
            </div>
            
            {/* Inner App Mockup */}
            <div className="flex-1 rounded-b-2xl overflow-hidden relative border-t border-white/10 bg-white -mx-4 md:-mx-8 -mb-4 md:-mb-8 mt-2 flex" dir="rtl">
              <iframe 
                src="https://system-edu.vercel.app/" 
                title="System Edu Preview"
                className="absolute inset-0 w-full h-full border-none"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#0B1120]/5 to-[#0B1120]/10 pointer-events-none" />
            </div>
        </motion.div>

        <AnimatePresence>
          {isExpanded && mounted && createPortal(
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#000B1D]/90 backdrop-blur-xl"
            >
              <motion.div 
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="w-full h-full max-w-[1600px] bg-[#0B1120] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
              >
                <div className="flex justify-between items-center px-4 py-3 bg-[#000B1D]/80 border-b border-white/5">
                  <div 
                    className="flex items-center gap-2 cursor-pointer group py-2 pr-2 -my-2 -mr-2" 
                    onClick={() => setIsExpanded(false)}
                    title="إغلاق"
                  >
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500 group-hover:bg-red-400 flex items-center justify-center transition-colors">
                      <X className="w-2.5 h-2.5 text-red-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80 group-hover:bg-amber-400 transition-colors" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 group-hover:bg-green-400 transition-colors" />
                  </div>
                  <div className="px-4 py-1 bg-white/5 rounded-full text-xs text-gray-400 font-mono border border-white/10 select-none blur-[4px] opacity-60">
                    fox-system.com/dashboard
                  </div>
                  <div className="w-10" />
                </div>
                <div className="flex-1 w-full bg-white relative" dir="rtl">
                  <iframe 
                    src="https://system-edu.vercel.app/" 
                    title="System Edu Preview Fullscreen"
                    className="absolute inset-0 w-full h-full border-none"
                  />
                </div>
              </motion.div>
            </motion.div>,
            document.body
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

