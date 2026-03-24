import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Let's Connect</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              I'm always open to discussing new projects, data insights, or opportunities to collaborate. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <a href="mailto:aadityapd29@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</div>
                  <div className="text-slate-900 font-medium">aadityapd29@gmail.com</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</div>
                  <div className="text-slate-900 font-medium">India (Open to Global Opportunities)</div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-12">
              <a 
                href="https://www.linkedin.com/in/aaditya-prasad-704a54355" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/aaditya-data/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-all"
              >
                <Github size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-3xl shadow-xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
        
        <footer className="mt-24 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Aaditya Prasad. Built with Passion & Data.
          </p>
        </footer>
      </div>
    </section>
  );
}
