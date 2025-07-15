'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7337FF] to-[#FF6B35] mx-auto mb-6" />
          <p className="text-[#B8B8D1] text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Let's work together
            </h3>
            
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#7337FF] to-[#FF6B35] rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-[#B8B8D1]">mohammed1566@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#7337FF] to-[#FF6B35] rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-[#B8B8D1]">+20 101 234 5678</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#7337FF] to-[#FF6B35] rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-[#B8B8D1]">Maadi, Cairo, Egypt</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="glass-effect p-8 rounded-2xl space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#B8B8D1] focus:outline-none focus:border-[#7337FF] transition-colors duration-300"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#B8B8D1] focus:outline-none focus:border-[#7337FF] transition-colors duration-300"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-[#B8B8D1] focus:outline-none focus:border-[#7337FF] transition-colors duration-300 resize-none"
              />
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-[#7337FF] to-[#FF6B35] rounded-lg text-white font-medium text-lg transition-all duration-300 hover:shadow-lg"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}