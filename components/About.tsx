'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="section-padding bg-[#0F0F14]">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7337FF] to-[#FF6B35] mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Passionate Developer & Designer
            </h3>
            <p className="text-[#B8B8D1] text-lg leading-relaxed">
              With over 3 years of experience in web development, I specialize in creating 
              modern, responsive applications using cutting-edge technologies. My passion 
              lies in transforming complex ideas into simple, elegant solutions.
            </p>
            <p className="text-[#B8B8D1] text-lg leading-relaxed">
              I believe in the power of clean code, thoughtful design, and continuous 
              learning. Every project is an opportunity to push boundaries and create 
              something extraordinary.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-[#7337FF] to-[#FF6B35] rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg">
                Download CV
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass-effect p-6 rounded-2xl text-center group hover:bg-white/20 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold gradient-text mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-[#B8B8D1] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}