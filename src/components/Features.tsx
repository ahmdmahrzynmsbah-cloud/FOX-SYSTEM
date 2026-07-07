import { motion } from 'motion/react';
import { UserCheck, Users, UsersRound, CalendarCheck, CreditCard, PieChart, Bell, ShieldCheck, DatabaseBackup, Zap } from 'lucide-react';

const features = [
  { icon: UserCheck, title: 'إدارة الطلاب', desc: 'تسجيل بيانات الطلاب، تتبع مستواهم، وتاريخهم بالكامل في مكان واحد.' },
  { icon: Users, title: 'إدارة المدرسين', desc: 'حسابات خاصة للمدرسين، نسب الأرباح، وإدارة مواعيدهم بسهولة.' },
  { icon: UsersRound, title: 'إدارة المجموعات', desc: 'توزيع الطلاب على مجموعات، مواعيد ذكية، ومنع التضارب.' },
  { icon: CalendarCheck, title: 'الحضور والغياب', desc: 'تسجيل الحضور بالباركود (QR Code) أو يدوياً في ثوانٍ معدودة.' },
  { icon: CreditCard, title: 'الأقساط والمدفوعات', desc: 'متابعة المصروفات، الأقساط المتأخرة، وطباعة إيصالات احترافية.' },
  { icon: PieChart, title: 'التقارير والإحصائيات', desc: 'تقارير مالية وإدارية شاملة لمساعدتك على اتخاذ قرارات صحيحة.' },
  { icon: Bell, title: 'الإشعارات ورسائل SMS', desc: 'إرسال رسائل تلقائية لأولياء الأمور بالغياب أو الدرجات.' },
  { icon: ShieldCheck, title: 'صلاحيات المستخدمين', desc: 'تحكم كامل في مين يقدر يشوف أو يعدل إيه في النظام (سكرتارية، مدير، مدرس).' },
  { icon: DatabaseBackup, title: 'النسخ الاحتياطي', desc: 'بياناتك في أمان تام مع نسخ احتياطي سحابي يومي وتلقائي.' },
  { icon: Zap, title: 'سرعة وأمان', desc: 'أداء فائق السرعة، مع أقوى معايير الأمان العالمية لحماية بياناتك.' },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            المميزات
          </div>
          <h2 className="text-4xl font-black mb-4">
            كل اللي محتاجه عشان تدير سنترك بنجاح
          </h2>
          <p className="text-lg text-gray-400 font-medium">
            FOX System بيوفرلك أدوات قوية وسهلة الاستخدام هتغير طريقة شغلك بالكامل.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {features.map((feature, index) => {
            let spanClass = "col-span-1";
            let extraStyles = "";
            
            if (index === 0) {
              spanClass = "md:col-span-2 md:row-span-2";
              extraStyles = "bg-gradient-to-br from-blue-900/30 to-transparent border-blue-500/20 overflow-hidden relative";
            } else if (index === 3) {
              spanClass = "md:col-span-2";
            } else if (index === 6) {
              spanClass = "md:col-span-2 lg:col-span-2";
            } else if (index === 9) {
              spanClass = "md:col-span-2 lg:col-span-3";
              extraStyles = "bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-transparent";
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 300, damping: 20 }}
                className={`glass rounded-3xl p-8 hover:bg-white/10 transition-all group border border-white/5 cursor-default ${spanClass} ${extraStyles}`}
              >
                {index === 0 && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/20 transition-all duration-700" />
                )}
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-cyan-400 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                  <feature.icon size={28} />
                </div>
                <h3 className={`font-bold text-gray-100 mb-3 ${index === 0 ? 'text-3xl' : 'text-xl'}`}>{feature.title}</h3>
                <p className={`text-gray-400 leading-relaxed font-medium ${index === 0 ? 'text-lg max-w-md' : ''}`}>
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
