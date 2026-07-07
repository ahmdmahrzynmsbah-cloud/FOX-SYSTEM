import { motion } from 'motion/react';
import { Star, Quote, User } from 'lucide-react';

const testimonials = [
  {
    name: 'أ. أحمد السيد',
    role: 'مدير سنتر الأوائل',
    text: 'السيستم وفر علينا مجهود خرافي، كنا بنعاني مع الحسابات والأقساط، دلوقتي بضغطة زرار بطلع تقرير كامل.',
  },
  {
    name: 'أ. محمد مصطفى',
    role: 'مدرس فيزياء',
    text: 'أفضل حاجة في FOX System هي تسجيل الحضور بالباركود. وفر وقت كبير جداً في بداية الحصة وخلصنا من الزحمة.',
  },
  {
    name: 'م. سارة محمود',
    role: 'صاحبة أكاديمية القمة',
    text: 'الدعم الفني ممتاز وموجودين دايماً. البرنامج سهل جداً والسكرتارية اتعلموا عليه في يوم واحد بس.',
  },
  {
    name: 'أ. خالد حسين',
    role: 'مدرس كيمياء',
    text: 'بصراحة النظام فرق معايا جدا في متابعة غياب الطلبة، ولما ولي الأمر بيسألني بطلعله التقرير في ثانية، حاجة محترمة بجد.',
  },
  {
    name: 'أ. محمود طارق',
    role: 'مدير سنتر المستقبل',
    text: 'شغل الملازم والمخازن كان عاملنا أزمة، من ساعة ما ركبنا السيستم وكل حاجة بقت متسجلة ومظبوطة بالملي، تسلم إيديكم.',
  },
  {
    name: 'م. دعاء علي',
    role: 'مدرسة لغة عربية',
    text: 'كنت خايفة في الأول مقدرش أتعامل معاه عشان ماليش في التكنولوجيا أوي، بس لقيته بسيط جدا وكل حاجة واضحة قدامي.',
  },
  {
    name: 'أ. إبراهيم عادل',
    role: 'محاسب السنتر',
    text: 'تقفيل الحسابات آخر اليوم كان كابوس، دلوقتي براجع التقرير في 5 دقايق وأطابق الخزنة وأنا مطمن 100%. شغل عالي.',
  }
];

export default function Testimonials() {
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black mb-4">
            شركاء النجاح
          </h2>
          <p className="text-lg text-gray-400 font-medium">
            آراء أصحاب السناتر والمدرسين اللي جربوا واعتمدوا على FOX System.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden" dir="rtl">
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-fox-bg to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-fox-bg to-transparent z-20 pointer-events-none" />
        
        <motion.div
          animate={{ x: ["0%", "50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex gap-6 w-max px-6"
        >
          {doubledTestimonials.map((t, index) => (
            <div
              key={index}
              className="glass p-6 md:p-8 rounded-3xl relative shadow-lg hover:bg-white/10 transition-colors flex flex-col w-[320px] md:w-[380px] shrink-0"
            >
              <Quote className="absolute top-6 right-6 text-white/5" size={40} />
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={16} />
                ))}
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-8 relative z-10 font-medium flex-grow">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 relative z-10 mt-auto pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full border-2 border-white/10 bg-white/5 flex items-center justify-center text-gray-400 shrink-0">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
