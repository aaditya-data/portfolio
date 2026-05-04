import { motion } from 'motion/react';
import { FileText, Download, Eye } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Resume
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Download my resume to learn more about my skills, projects, and experience.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass p-8 md:p-12 rounded-3xl shadow-xl border border-white/20 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
              <FileText size={48} className="md:size-16" />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Curriculum Vitae</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                My resume provides a detailed overview of my professional background, technical expertise in data analysis, and the impact I've delivered through various projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="/resume.pdf" 
                  download="Aaditya_Prasad_Resume.pdf"
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 group"
                >
                  <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                  Download Resume
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all group"
                >
                  <Eye size={20} className="group-hover:scale-110 transition-transform" />
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
