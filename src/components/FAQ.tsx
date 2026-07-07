import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'هل النظام بيحتاج تسطيب على الأجهزة؟',
    a: 'لا، FOX System هو نظام سحابي (Cloud-based)، يعني تقدر تفتحه من أي متصفح على الكمبيوتر، التابلت، أو الموبايل بدون أي تسطيب.'
  },
  {
    q: 'هل بيانات السنتر والطلاب في أمان؟',
    a: 'أكيد. بنستخدم أعلى معايير التشفير والأمان، وبيتم عمل نسخ احتياطي (Backup) تلقائي يومياً عشان نضمن إن مفيش أي بيانات تضيع.'
  },
  {
    q: 'هل أقدر أضيف كذا مستخدم بصلاحيات مختلفة؟',
    a: 'أيوة، تقدر تضيف سكرتارية، مدرسين، ومساعدين، وتحدد لكل واحد فيهم صلاحيات معينة (مثلاً السكرتير يقدر يسجل الغياب لكن ميقدرش يشوف إجمالي الأرباح).'
  },
  {
    q: 'لو واجهتني مشكلة، إيه هو الدعم الفني المتاح؟',
    a: 'الدعم الفني بتاعنا متاح 24/7 عن طريق الواتساب والمكالمات لحل أي مشكلة أو الرد على استفساراتك فوراً.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-lg text-gray-400 font-medium">
            كل اللي محتاج تعرفه عن FOX System.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-sm backdrop-blur-xl"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-right hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-100">{faq.q}</span>
                  <ChevronDown 
                    className={`text-cyan-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-400 font-medium leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
