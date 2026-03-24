import { motion } from 'motion/react';
import { ExternalLink, Github, BarChart3, Database, Layout } from 'lucide-react';
import { ASSETS } from '../constants/assets';

const projects = [
  {
    title: 'Black Friday Analysis',
    description: 'Customer segmentation, demand patterns, and campaign performance analysis.',
    tags: ['Python', 'EDA', 'Sales Analysis'],
    icon: BarChart3,
    image: ASSETS.IMAGES.PROJECTS.BLACK_FRIDAY,
    color: 'emerald',
    colorClasses: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'Financial Performance Analysis',
    description: 'Revenue, cost drivers, and budget variance dashboard for business decision-making.',
    tags: ['Power BI', 'Finance', 'Dashboard'],
    icon: Layout,
    image: ASSETS.IMAGES.PROJECTS.FINANCIAL_PERFORMANCE,
    color: 'blue',
    colorClasses: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Risk Analytics in Insurance Domain',
    description: 'Fraud detection, claim patterns, and operational risk insights.',
    tags: ['SQL', 'Risk Analysis', 'Insurance'],
    icon: Database,
    image: ASSETS.IMAGES.PROJECTS.RISK_ANALYTICS,
    color: 'indigo',
    colorClasses: 'bg-indigo-50 text-indigo-600'
  },
  {
    title: 'Superstore Marketing Campaign Analysis',
    description: 'Customer behavior analysis and membership response prediction.',
    tags: ['Marketing', 'Prediction', 'Analysis'],
    icon: BarChart3,
    image: ASSETS.IMAGES.PROJECTS.SUPERSTORE,
    color: 'rose',
    colorClasses: 'bg-rose-50 text-rose-600'
  },
  {
    title: 'UPI Transactions Data Analysis',
    description: 'Transaction monitoring, fraud detection, and payment platform performance insights.',
    tags: ['Data Analysis', 'UPI', 'Fintech'],
    icon: Database,
    image: ASSETS.IMAGES.PROJECTS.UPI_TRANSACTIONS,
    color: 'purple',
    colorClasses: 'bg-purple-50 text-purple-600'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-slate-600 max-w-xl">
              Showcasing my ability to transform raw data into visual stories and strategic recommendations.
            </p>
          </div>
          <a 
            href="https://github.com/aaditya-data/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 font-bold flex items-center gap-2 hover:underline"
          >
            View all on GitHub <Github size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border-slate-100 flex flex-col h-full"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-50 border-b border-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all">
                      <ExternalLink size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all">
                      <Github size={18} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${project.colorClasses} shrink-0`}>
                    <project.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 line-clamp-1">{project.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
