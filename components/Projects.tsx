'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    title: 'Mobile Banking App Redesign',
    description: 'Complete UX research and UI redesign for a banking application, improving user satisfaction by 35%.',
    image: 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Figma', 'Prototyping', 'User Research', 'Design System'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'E-Learning Platform UX',
    description: 'Comprehensive user experience design for an interactive learning platform with accessibility features.',
    image: 'https://images.pexels.com/photos/3182831/pexels-photo-3182831.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Adobe XD', 'Usability Testing', 'Wireframing', 'UI Animation'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Health Tracking Dashboard',
    description: 'Data visualization and interface design for a health monitoring application with intuitive navigation.',
    image: 'https://images.pexels.com/photos/8439993/pexels-photo-8439993.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Sketch', 'InVision', 'Information Architecture', 'Responsive Design'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="section-padding bg-[#0F0F14]">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7337FF] to-[#FF6B35] mx-auto mb-6" />
          <p className="text-[#B8B8D1] text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-4 py-2 bg-[#7337FF] text-white rounded-lg text-sm font-medium"
                    >
                      Live Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-4 py-2 glass-effect text-white rounded-lg text-sm font-medium"
                    >
                      GitHub
                    </motion.button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#7337FF] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#B8B8D1] mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#7337FF]/20 text-[#7337FF] rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-effect rounded-full text-white font-medium text-lg transition-all duration-300 hover:bg-white/20"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}