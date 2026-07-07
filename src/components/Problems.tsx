import { motion } from 'motion/react';
import { BookX, Users, AlertCircle, FileSpreadsheet, NotebookPen, CalendarClock } from 'lucide-react';

const problems = [
  { icon: NotebookPen, text: 'نسيان الأقساط', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20 border' },
  { icon: AlertCircle, text: 'ضياع بيانات الطلاب', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20 border' },
  { icon: CalendarClock, text: 'مشاكل الحضور والغياب', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20 border' },
  { icon: Users, text: 'لخبطة المجموعات', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20 border' },
  { icon: BookX, text: 'الحسابات اليدوية المعقدة', color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20 border' },
  { icon: FileSpreadsheet, text: 'عدم وجود تقارير دقيقة', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20 border' },
];

export default function Problems() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-4"
          >
            لسه بتعاني من المشاكل دي؟
          </motion.h2>
          <p className="text-lg text-gray-400 font-medium">
            الإدارة العشوائية والورقية بتضيع وقتك ومجهودك وفلوسك، وبتقلل من احترافية سنترك قدام الطلاب وأولياء الأمور.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-y-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 3 : -3, y: -5 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
              className={`bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-all backdrop-blur-xl group cursor-default shadow-lg ${
                index % 3 === 1 ? 'md:translate-y-8' : index % 3 === 2 ? 'md:translate-y-16' : ''
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl ${problem.bg} ${problem.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]`}>
                <problem.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-200">{problem.text}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h3 className="text-3xl font-black mb-4 relative z-10">الحل هنا... FOX System بيحل كل ده وأكتر!</h3>
          <p className="text-blue-50 text-lg max-w-2xl mx-auto relative z-10 font-medium">
            نظام مصمم بذكاء عشان يخلي إدارة سنترك أسهل، أسرع، وبدون أي أخطاء بشرية.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
