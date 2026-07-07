import { Hexagon, Facebook, Instagram, Send, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 md:px-12 py-12 bg-white/5 border-t border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12 border-b border-white/10 pb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 rotate-12">
                <span className="text-2xl font-bold text-white -rotate-12">F</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">FOX <span className="text-cyan-400">SYSTEM</span></span>
            </div>
            <p className="max-w-sm text-gray-400 font-medium leading-relaxed">
              النظام الأذكى والأسرع لإدارة السناتر التعليمية في مصر. بنساعدك تركز على التعليم وإحنا علينا الإدارة.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">المميزات</a></li>
              <li><a href="#comparison" className="text-gray-400 hover:text-cyan-400 transition-colors">ليه تختارنا؟</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-cyan-400 transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">تواصل معنا</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="https://wa.me/201034859313" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-cyan-400 transition-colors group w-fit">
                  <Phone size={18} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  <span className="inline-block ltr" dir="ltr">+20 103 485 9313</span>
                </a>
              </li>
              <li>
                <a href="mailto:aa7ahmed.2007@gmail.com" className="flex items-center gap-3 hover:text-cyan-400 transition-colors group w-fit">
                  <Mail size={18} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  <span>aa7ahmed.2007@gmail.com</span>
                </a>
              </li>
              <li className="flex gap-4 mt-4">
                <a href="https://www.facebook.com/share/1EDnGL7gnQ/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-white"><Facebook size={18} /></a>
                <a href="https://www.instagram.com/fox.tech.1?igsh=M2tzejA0OGNydWx6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-white"><Instagram size={18} /></a>
                <a href="https://t.me/FoxTech_1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-white"><Send size={18} className="-ml-1" /></a>
                <a href="https://tiktok.com/@fox.tech_1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" height="18" width="18">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">✓</div>
              <span className="text-sm font-medium text-gray-400">إدارة الأقساط</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">✓</div>
              <span className="text-sm font-medium text-gray-400">تحضير باركود</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">✓</div>
              <span className="text-sm font-medium text-gray-400">تقارير ذكية</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} FOX TECH SYSTEMS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
