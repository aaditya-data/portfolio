import { motion } from 'motion/react';
import { ArrowRight, Download, BarChart, PieChart, TrendingUp, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden data-grid-bg">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            Aspiring Data Analyst
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Turning Data into <span className="text-blue-600">Insights.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Hi, I'm Aaditya Prasad. I specialize in uncovering hidden patterns and building data-driven strategies to solve complex problems.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-50 transition-all"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="flex gap-6 items-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Connect:</span>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/aaditya-prasad-704a54355" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/aaditya-data/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 glass rounded-3xl p-8 shadow-2xl border-slate-200/50">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="text-xs font-mono text-slate-400">analysis_v2.csv</div>
            </div>
            
            <div className="space-y-6">
              <div className="h-4 w-3/4 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '70%' }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="h-full bg-blue-500"
                />
              </div>
              <div className="h-4 w-1/2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '45%' }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  className="h-full bg-indigo-500"
                />
              </div>
              <div className="h-4 w-5/6 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                  className="h-full bg-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="p-4 rounded-2xl bg-blue-50 flex flex-col items-center gap-2">
                <BarChart className="text-blue-600" size={20} />
                <span className="text-[10px] font-bold text-blue-800 uppercase">Growth</span>
              </div>
              <div className="p-4 rounded-2xl bg-indigo-50 flex flex-col items-center gap-2">
                <PieChart className="text-indigo-600" size={20} />
                <span className="text-[10px] font-bold text-indigo-800 uppercase">Share</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 flex flex-col items-center gap-2">
                <TrendingUp className="text-emerald-600" size={20} />
                <span className="text-[10px] font-bold text-emerald-800 uppercase">Trend</span>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20"
          >
            <div className="text-xs font-bold text-slate-500 mb-1">Accuracy</div>
            <div className="text-xl font-bold text-blue-600">99.8%</div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-6 glass p-4 rounded-2xl shadow-xl z-20"
          >
            <div className="text-xs font-bold text-slate-500 mb-1">Processed</div>
            <div className="text-xl font-bold text-emerald-600">2.4M+</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
