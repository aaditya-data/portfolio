import { motion } from 'motion/react';
import { User, Target, GraduationCap } from 'lucide-react';
import { ASSETS } from '../constants/assets';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video md:aspect-square rounded-3xl bg-slate-900 overflow-hidden relative group border-4 border-white shadow-2xl">
              <img 
                src={ASSETS.IMAGES.AVATAR} 
                alt="Aaditya Prasad Avatar" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10 shadow-lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <User className="text-blue-600" /> About Me
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              I am Aaditya Prasad, a 21-year-old BCA student from India with a burning passion for data. My journey is fueled by a simple belief: <span className="text-blue-600 font-semibold italic">Data is the new oil, and I am the refiner.</span>
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Target className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Career Goal</h4>
                  <p className="text-slate-600 text-sm">To become a highly skilled Data Analyst, leveraging data to drive smart business decisions and continuously improving my expertise in analytics tools and techniques.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <GraduationCap className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Education</h4>
                  <p className="text-slate-600 text-sm">Currently pursuing Bachelor of Computer Applications (BCA), building a strong foundation in computer science and analytics.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
