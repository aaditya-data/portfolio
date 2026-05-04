import { motion } from 'motion/react';
import { Database, Table, Layout, Search, Code, PieChart } from 'lucide-react';

const skills = [
  {
    name: "MS Excel",
    icon: "https://img.icons8.com/color/96/microsoft-excel-2019--v1.png",
    type: "Data Analysis"
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    type: "Database"
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    type: "Programming"
  },
  {
    name: "Power BI",
    icon: "https://img.icons8.com/color/96/power-bi.png",
    type: "Data Visualization"
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    type: "Data Manipulation"
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    type: "Numerical Computing"
  },
  {
    name: "Matplotlib",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
    type: "Data Visualization"
  },
  {
    name: "Seaborn",
    icon: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg",
    type: "Statistical Visualization"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A diverse toolkit focused on extracting, cleaning, and visualizing data to drive business decisions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="glass p-8 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all border-slate-100"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{skill.name}</h3>
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{skill.type}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
