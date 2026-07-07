import { motion } from 'motion/react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const comparison = [
  { old: 'كشكول ودفاتر قابلة للضياع والتلف', new: 'نظام سحابي آمن 100%' },
  { old: 'ملفات Excel معقدة وصعبة التعديل', new: 'واجهة بسيطة وسهلة الاستخدام' },
  { old: 'أخطاء بشرية في الحسابات', new: 'دقة متناهية وحسابات تلقائية' },
  { old: 'وقت ضايع في تحضير الطلاب', new: 'تحضير في ثواني بالـ QR Code' },
  { old: 'صعوبة تتبع غياب الطلاب والأقساط', new: 'إشعارات وتقارير فورية لكل طالب' },
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 relative border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            ليه تختار FOX System؟
          </h2>
          <p className="text-lg text-gray-400 font-medium">
            مقارنة سريعة بين طريقة الشغل القديمة والنظام الحديث.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-0">
          {/* Traditional Way */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-10 rounded-3xl md:rounded-l-none border border-white/10 md:border-l-0 shadow-sm backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-gray-400 mb-8 flex items-center gap-3 justify-center">
              الإدارة التقليدية
            </h3>
            <div className="space-y-6">
              {comparison.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <XCircle className="text-gray-500 mt-1 shrink-0" size={24} />
                  <p className="text-gray-400 font-medium text-lg leading-relaxed">{item.old}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FOX System Way */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 md:p-10 rounded-3xl md:rounded-r-none shadow-2xl text-white relative z-10 md:-ml-4 scale-105 shadow-blue-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 justify-center">
              FOX System 🚀
            </h3>
            <div className="space-y-6">
              {comparison.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-white mt-1 shrink-0" size={24} />
                  <p className="text-white font-medium text-lg leading-relaxed">{item.new}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
