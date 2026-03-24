import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, BarChart3, Database, Layout, X, ZoomIn, Loader2 } from 'lucide-react';
import { ASSETS } from '../constants/assets';
import { useState, useEffect } from 'react';
import { generateProjectImage } from '../services/imageGenerator';

const projectsData = [
  {
    title: 'Black Friday Analysis',
    description: 'Customer segmentation, demand patterns, and campaign performance analysis.',
    tags: ['Python', 'EDA', 'Sales Analysis'],
    icon: BarChart3,
    prompt: 'Black Friday sales analysis dashboard with customer segmentation and demand patterns',
    color: 'emerald',
    colorClasses: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'Financial Performance Analysis',
    description: 'Revenue, cost drivers, and budget variance dashboard for business decision-making.',
    tags: ['Power BI', 'Finance', 'Dashboard'],
    icon: Layout,
    prompt: 'Corporate financial performance dashboard with revenue and budget variance charts',
    color: 'blue',
    colorClasses: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Risk Analytics in Insurance Domain',
    description: 'Fraud detection, claim patterns, and operational risk insights.',
    tags: ['SQL', 'Risk Analysis', 'Insurance'],
    icon: Database,
    prompt: 'Insurance risk analytics dashboard showing fraud detection and claim patterns',
    color: 'indigo',
    colorClasses: 'bg-indigo-50 text-indigo-600'
  },
  {
    title: 'Superstore Marketing Campaign Analysis',
    description: 'Customer behavior analysis and membership response prediction.',
    tags: ['Marketing', 'Prediction', 'Analysis'],
    icon: BarChart3,
    prompt: 'Retail superstore marketing campaign analysis dashboard with customer behavior metrics',
    color: 'rose',
    colorClasses: 'bg-rose-50 text-rose-600'
  },
  {
    title: 'UPI Transactions Data Analysis',
    description: 'Transaction monitoring, fraud detection, and payment platform performance insights.',
    tags: ['Data Analysis', 'UPI', 'Fintech'],
    icon: Database,
    prompt: 'Fintech UPI transaction analysis dashboard with fraud detection alerts',
    color: 'purple',
    colorClasses: 'bg-purple-50 text-purple-600'
  }
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [projectImages, setProjectImages] = useState<Record<string, string>>({});
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchImages = async () => {
      const newImages: Record<string, string> = {};
      const newLoading: Record<string, boolean> = {};
      
      projectsData.forEach(p => {
        newLoading[p.title] = true;
      });
      setLoadingImages(newLoading);

      await Promise.all(projectsData.map(async (project) => {
        const img = await generateProjectImage(project.title, project.prompt);
        newImages[project.title] = img;
        setProjectImages(prev => ({ ...prev, [project.title]: img }));
        setLoadingImages(prev => ({ ...prev, [project.title]: false }));
      }));
    };

    fetchImages();
  }, []);

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
          {projectsData.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border-slate-100 flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100 flex items-center justify-center">
                {loadingImages[project.title] ? (
                  <div className="flex flex-col items-center gap-2 text-slate-400">
                    <Loader2 size={32} className="animate-spin" />
                    <span className="text-xs font-medium">Generating Image...</span>
                  </div>
                ) : (
                  <>
                    <img 
                      src={projectImages[project.title]} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <button 
                          onClick={() => setSelectedImage(projectImages[project.title])}
                          className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-xl"
                          title="Zoom Image"
                        >
                          <ZoomIn size={20} />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-xl">
                          <ExternalLink size={20} />
                        </button>
                      </div>
                    </div>
                  </>
                )}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                    <Github size={16} />
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

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Project Full View"
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

