import { motion } from 'motion/react';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import CountUp from 'react-countup';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            y: [null, Math.random() * -100, Math.random() * 100],
            x: [null, Math.random() * -100, Math.random() * 100],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10 pt-12 md:pt-16">
        
        <motion.div 
          className="md:col-span-6 flex flex-col items-start gap-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-sm font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            نظام ادارة السناتر التعليمية لعام 2026
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.3] md:leading-[1.25] tracking-tight text-white pb-2">
            ودع الإدارة التقليدية... <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 block py-2 leading-[1.2]">
              وخلي FOX يدير سنترك بالكامل.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed mt-2">
            نظام سحابي متكامل يجمع بين قوة الأداء وسهولة الاستخدام. تحكم في الطلاب، المدرسين، والأقساط من شاشة واحدة بدقة متناهية.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 mt-4 w-full">
            <a 
              href="https://wa.me/201034859313"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-105 transition-all flex items-center gap-3 text-white"
            >
              🔥 احجز تجربة مجانية
            </a>
            
            <a 
              href="https://wa.me/201034859313"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-lg backdrop-blur-xl hover:bg-white/10 transition-all flex items-center gap-3 text-white group"
            >
              <MessageCircle className="group-hover:text-cyan-400 transition-colors" /> تواصل واتساب
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap sm:flex-nowrap justify-between gap-4 md:gap-6 mt-8 relative z-10 pt-8 border-t border-white/10 w-full"
          >
            <div className="flex flex-col items-center sm:items-start flex-1">
              <span className="text-2xl md:text-3xl font-bold text-white flex flex-row-reverse justify-end gap-1 font-mono">
                <span>+</span><CountUp start={0} end={750} duration={2.5} />
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-widest mt-1 text-center sm:text-right">طالب نشط</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10 mx-1 md:mx-2" />
            <div className="flex flex-col items-center sm:items-start flex-1">
              <span className="text-2xl md:text-3xl font-bold text-white flex flex-row-reverse justify-end gap-1 font-mono">
                <span>+</span><CountUp start={0} end={12} duration={2.5} />
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-widest mt-1 text-center sm:text-right">سنتر تعليمي</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10 mx-1 md:mx-2" />
            <div className="flex flex-col items-center sm:items-start flex-1">
              <span className="text-2xl md:text-3xl font-bold text-cyan-400 flex flex-row-reverse justify-end gap-1 font-mono">
                <span>%</span><CountUp start={0} end={99.9} duration={2.5} decimals={1} />
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-widest mt-1 text-center sm:text-right">استقرار النظام</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="md:col-span-6 relative mt-16 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
        >
          <div className="relative glass rounded-3xl shadow-[0_0_50px_rgba(37,99,235,0.15)] overflow-hidden group aspect-[4/3] md:aspect-[16/10] border border-white/10 mt-8 md:mt-0">
            {/* Mockup Header */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-[#000B1D]/90 backdrop-blur-md flex items-center px-4 gap-2 z-20 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 flex-1 h-6 bg-white/5 rounded-md flex items-center px-3 relative overflow-hidden group">
                <span className="text-[10px] text-gray-500 font-mono tracking-wider select-none blur-[4px] opacity-60">system-edu.vercel.app</span>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              </div>
            </div>
            {/* Mockup Body - Iframe */}
            <div className="absolute inset-0 pt-10 bg-white">
              <iframe 
                src="https://system-edu.vercel.app/" 
                title="System Edu Preview"
                className="w-full h-full border-none"
              />
            </div>
            
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none z-30" />
          </div>
          
          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white rounded-3xl p-6 shadow-2xl text-slate-900 w-56 transform -rotate-3 border border-slate-200 z-20"
          >
            <div className="text-xs font-bold text-slate-400 uppercase mb-1">تقرير الأرباح</div>
            <div className="text-2xl font-black text-blue-700 flex items-center gap-1 justify-end flex-row-reverse" dir="ltr">
              <CountUp start={0} end={42500} duration={3} separator="," />
              <span>EGP</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs font-bold text-green-500">
              <span className="flex items-center justify-center w-4 h-4 bg-green-100 rounded-full">↑</span>
              <span className="flex items-center gap-0.5" dir="ltr">
                <span>+</span>
                <CountUp start={0} end={24} duration={3} />
                <span>%</span>
              </span>
              <span>عن الشهر الماضي</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
