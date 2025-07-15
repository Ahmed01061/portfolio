'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative">
      {/* Background blur overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 relative z-10"
        >
          {/* Profile Picture with Breathing Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 20px rgba(115, 55, 255, 0.3)',
                  '0 0 40px rgba(115, 55, 255, 0.6)',
                  '0 0 20px rgba(115, 55, 255, 0.3)'
                ]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#7337FF]/30 relative">
                <img
                  src="https://ahmedwalid0106.sirv.com/hjg.png"
                  alt="Mohammed Elprince - Professional Developer"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#7337FF]/20 to-transparent" />
              </div>
              
              {/* Animated ring around picture */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#7337FF]/40"
              />
              
              {/* Pulsing dots */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-2 -right-2 w-4 h-4 bg-[#FF6B35] rounded-full"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#00D9FF] rounded-full"
              />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: [0.5, 1.02, 1],
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="gradient-text"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(115, 55, 255, 0.5)',
                  '0 0 30px rgba(115, 55, 255, 0.8)',
                  '0 0 20px rgba(115, 55, 255, 0.5)'
                ]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Mohammed Elprince
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, -2, 0]
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl text-[#B8B8D1] mb-8"
          >
            I'm a{' '}
            <motion.span
              animate={{
                textShadow: [
                  '0 0 10px rgba(115, 55, 255, 0.3)',
                  '0 0 20px rgba(115, 55, 255, 0.6)',
                  '0 0 10px rgba(115, 55, 255, 0.3)'
                ]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <TypeAnimation
                sequence={[
                  'UI/UX Designer',
                  2000,
                  'Product Designer',
                  2000,
                  'UI / UX Lead',
                  2000,
                  'Creative Director',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="gradient-text"
                repeat={Infinity}
              />
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-[#B8B8D1] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I create exceptional digital experiences that combine cutting-edge technology 
            with intuitive design. Passionate about turning complex problems into simple, 
            beautiful solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 20px 40px rgba(115, 55, 255, 0.4)',
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 10px 20px rgba(115, 55, 255, 0.2)',
                  '0 15px 30px rgba(115, 55, 255, 0.3)',
                  '0 10px 20px rgba(115, 55, 255, 0.2)'
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="px-8 py-4 bg-gradient-to-r from-[#7337FF] to-[#FF6B35] rounded-full text-white font-medium text-lg transition-all duration-300"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: '0 10px 20px rgba(255, 255, 255, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-full text-white font-medium text-lg transition-all duration-300 hover:bg-white/20"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#7337FF] rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-[#7337FF] rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}