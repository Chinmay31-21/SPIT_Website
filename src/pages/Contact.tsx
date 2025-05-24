import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] py-8">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent mb-8"
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#00BFFF] mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-white/80">
                      Bhavan's Campus, Munshi Nagar, Andheri (West),<br />
                      Mumbai 400058, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#00BFFF] mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-white/80">+91 (22) 2670 7440</p>
                    <p className="text-white/80">+91 (22) 2670 7441</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#00BFFF] mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-white/80">principal@spit.ac.in</p>
                    <p className="text-white/80">info@spit.ac.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#00BFFF] mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Office Hours</h3>
                    <p className="text-white/80">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-white/80">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-[#00BFFF] mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Website</h3>
                    <p className="text-white/80">www.spit.ac.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Quick Links</h2>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="text-white/80 hover:text-[#00BFFF] transition-colors">Admissions</a>
                <a href="#" className="text-white/80 hover:text-[#00BFFF] transition-colors">Academics</a>
                <a href="#" className="text-white/80 hover:text-[#00BFFF] transition-colors">Placements</a>
                <a href="#" className="text-white/80 hover:text-[#00BFFF] transition-colors">Research</a>
                <a href="#" className="text-white/80 hover:text-[#00BFFF] transition-colors">Library</a>
                <a href="#" className="text-white/80 hover:text-[#00BFFF] transition-colors">Student Life</a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-black/30 border border-[#00BFFF]/30 rounded-lg text-white focus:outline-none focus:border-[#00BFFF]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-black/30 border border-[#00BFFF]/30 rounded-lg text-white focus:outline-none focus:border-[#00BFFF]"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-black/30 border border-[#00BFFF]/30 rounded-lg text-white focus:outline-none focus:border-[#00BFFF]"
                  placeholder="Message Subject"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 bg-black/30 border border-[#00BFFF]/30 rounded-lg text-white focus:outline-none focus:border-[#00BFFF]"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#00BFFF]/20 hover:bg-[#00BFFF]/30 text-white rounded-lg border border-[#00BFFF]/30 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <div className="bg-black/30 backdrop-blur-md border border-[#00BFFF]/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Location</h2>
            <div className="aspect-video rounded-lg overflow-hidden">
             <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.4709154135721!2d72.835634613488!3d19.12308312390606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan's%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1748075101979!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/></iframe>
            </div>
          </div>
        </motion.div>
      </div>
   
  );
};