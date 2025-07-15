'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Dribbble', href: '#', icon: Dribbble },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F0F14] border-t border-white/10">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text mb-4"
            >
              Portfolio
            </motion.h3>
            <p className="text-[#B8B8D1] leading-relaxed">
              Creating exceptional digital experiences with modern technologies 
              and thoughtful design.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-[#B8B8D1] hover:text-[#7337FF] transition-colors duration-300"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300"
                    title={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-[#B8B8D1]">
            © 2025 Portfolio. Made by <a href="https://www.linkedin.com/in/ahmed-walid561/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7337FF] transition-colors duration-300">Ahmed Walid</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}