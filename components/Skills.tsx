'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  FileText, 
  Target, 
  Server, 
  Code2, 
  Palette, 
  Database, 
  BarChart3 
} from 'lucide-react';

const skills = [
  { name: 'Figma', level: 92, icon: Palette },
  { name: 'Adobe XD', level: 88, icon: Code },
  { name: 'Wireframing', level: 90, icon: FileText },
  { name: 'Prototyping', level: 85, icon: Target },
  { name: 'User Research', level: 82, icon: Code2 },
  { name: 'Accessibility', level: 87, icon: Server },
  { name: 'Design Systems', level: 84, icon: Database },
  { name: 'Interaction Design', level: 89, icon: BarChart3 },
];

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7337FF] to-[#FF6B35] mx-auto mb-6" />
          <p className="text-[#B8B8D1] text-lg max-w-2xl mx-auto">
            A diverse set of technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect p-6 rounded-2xl group hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>                <h3 className="text-white font-semibold mb-3">{skill.name}</h3>
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className="bg-gradient-to-r from-[#7337FF] to-[#FF6B35] h-2 rounded-full"
                    />
                  </div>
                  <span className="text-[#B8B8D1] text-sm">{skill.level}%</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}