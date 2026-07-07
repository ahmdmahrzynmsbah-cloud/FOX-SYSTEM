import { motion, useInView } from 'motion/react';
import { Check, X } from 'lucide-react';
import CountUp from 'react-countup';
import { useRef } from 'react';

const packages = [
  {
    name: 'الباقة الأساسية',
    price: 300,
    description: 'مثالية للسناتر الصغيرة والمدرسين الجدد',
    features: [
      { name: 'إدارة سجلات الطلاب', included: true },
      { name: 'تسجيل الحضور والغياب', included: true },
      { name: 'تقارير مالية أساسية', included: true },
      { name: 'دعم فني خلال ساعات العمل', included: true },
      { name: 'رسائل واتساب', included: false },
      { name: 'صلاحيات مخصصة للمساعدين', included: false },
    ],
    highlighted: false,
  },
  {
    name: 'الباقة الاحترافية',
    price: 400,
    description: 'الخيار الأفضل للسناتر المتوسطة التي تبحث عن النمو',
    features: [
      { name: 'إدارة سجلات الطلاب', included: true },
      { name: 'تسجيل الحضور والغياب', included: true },
      { name: 'تقارير مالية متقدمة', included: true },
      { name: 'دعم فني 24/7', included: true },
      { name: 'رسائل واتساب للطلاب', included: true },
      { name: 'صلاحيات مخصصة للمساعدين', included: false },
    ],
    highlighted: true,
  },
  {
    name: 'الباقة الشاملة',
    price: 500,
    description: 'المستوى الأقصى للسناتر الكبيرة للتحكم الكامل',
    features: [
      { name: 'إدارة سجلات الطلاب', included: true },
      { name: 'تسجيل الحضور والغياب', included: true },
      { name: 'تقارير مالية وتحليلات شاملة', included: true },
      { name: 'دعم فني فوري (VIP)', included: true },
      { name: 'رسائل واتساب غير محدودة', included: true },
      { name: 'صلاحيات مخصصة للمساعدين', included: true },
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-sm font-bold uppercase tracking-wider mb-6"
          >
            باقات الاشتراك
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            خطط أسعار <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">مرنة وتناسبك</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            اختر الباقة الأنسب لحجم عملك. لا توجد رسوم خفية، استثمر في نجاح سنترك الآن.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative bg-white/5 rounded-3xl border transition-all duration-300 hover:bg-white/10 ${
                pkg.highlighted 
                  ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.2)] scale-105 z-10 md:py-12 py-8' 
                  : 'border-white/10 md:py-8 py-8'
              } px-8 overflow-hidden`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold text-center py-2 uppercase tracking-widest">
                  الأكثر طلباً
                </div>
              )}
              
              <div className={pkg.highlighted ? "mt-4" : ""}>
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{pkg.description}</p>
                
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {isInView ? <CountUp start={0} end={pkg.price} duration={2} /> : 0}
                  </span>
                  <span className="text-gray-400 font-bold mb-2">ج.م / شهرياً</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        feature.included ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-gray-500'
                      }`}>
                        {feature.included ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                      </div>
                      <span className={`text-sm ${feature.included ? 'text-gray-200' : 'text-gray-500'}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/201034859313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block text-center py-4 rounded-xl font-bold transition-all ${
                    pkg.highlighted
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  اشترك الآن
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
