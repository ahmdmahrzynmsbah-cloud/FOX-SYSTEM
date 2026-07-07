import { motion } from 'motion/react';
import { ArrowLeft, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight text-white"
        >
          جاهز تطور إدارة سنترك؟
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 font-medium"
        >
          انضم لأكثر من 120 سنتر تعليمي بيعتمدوا على FOX System يومياً.
          احجز نسختك التجريبية دلوقتي وشوف الفرق بنفسك.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#demo"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:shadow-[0_0_60px_rgba(6,182,212,0.4)] hover:-translate-y-1 transition-all"
          >
            احجز Demo الآن
            <ArrowLeft size={24} />
          </a>
          
          <a 
            href="https://wa.me/201034859313"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 hover:-translate-y-1 transition-all"
          >
            <MessageCircle size={24} className="text-[#25D366]" />
            تواصل واتساب
          </a>
        </motion.div>
      </div>
    </section>
  );
}
