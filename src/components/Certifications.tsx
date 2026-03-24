import { motion } from 'motion/react';
import { Award, CheckCircle2, Clock } from 'lucide-react';

const certs = [
  {
    title: 'Google Data Analytics',
    provider: 'Coursera / Google',
    status: 'Completed',
    icon: Award,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    title: 'IBM Data Analyst',
    provider: 'Coursera / IBM',
    status: 'Completed',
    icon: Award,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    title: 'Microsoft Power BI Data Analyst',
    provider: 'Microsoft',
    status: 'Completed',
    icon: Award,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Learning Journey</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I am committed to continuous learning and professional development through globally recognized certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-8 rounded-3xl flex flex-col items-center text-center group hover:border-blue-200 transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl ${cert.bg} ${cert.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <cert.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h3>
              <p className="text-slate-500 text-sm mb-6">{cert.provider}</p>
              
              <div className={`flex items-center gap-2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${cert.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                {cert.status === 'Completed' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                {cert.status}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
