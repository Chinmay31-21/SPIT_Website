import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Globe, User } from 'lucide-react';

export const ContactUs = () => {
  const departments = [
    {
      name: "Admissions Office",
      contact: "admissions@spit.ac.in",
      phone: "+91 (22) 2670 7440",
      timing: "9:00 AM - 5:00 PM"
    },
    {
      name: "Academic Office",
      contact: "academic@spit.ac.in",
      phone: "+91 (22) 2670 7441",
      timing: "9:00 AM - 5:00 PM"
    },
    {
      name: "Training & Placement",
      contact: "tpo@spit.ac.in",
      phone: "+91 (22) 2670 7442",
      timing: "9:00 AM - 5:00 PM"
    },
    {
      name: "Student Affairs",
      contact: "students@spit.ac.in",
      phone: "+91 (22) 2670 7443",
      timing: "9:00 AM - 5:00 PM"
    }
  ];

  const keyPersonnel = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal",
      email: "principal@spit.ac.in",
      phone: "+91 (22) 2670 7400"
    },
    {
      name: "Prof. Sunita Sharma",
      position: "Vice Principal",
      email: "viceprincipal@spit.ac.in",
      phone: "+91 (22) 2670 7401"
    },
    {
      name: "Dr. Amit Patel",
      position: "Dean Academics",
      email: "dean.academics@spit.ac.in",
      phone: "+91 (22) 2670 7402"
    },
    {
      name: "Prof. Priya Mehta",
      position: "Dean Student Affairs",
      email: "dean.students@spit.ac.in",
      phone: "+91 (22) 2670 7403"
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Contact Us</h2>
        <p className="text-white/80 max-w-3xl mx-auto">
          Get in touch with us for any queries, admissions, or general information. 
          Our dedicated team is here to assist you with all your needs.
        </p>
      </motion.div>

      {/* Main Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6 mb-8"
      >
        <h3 className="text-2xl font-bold text-[#FFD700] mb-6">General Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#00BFFF] mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Address</h4>
                <p className="text-white/80">
                  Bhavan's Campus, Munshi Nagar, Andheri (West),<br />
                  Mumbai 400058, Maharashtra, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#00BFFF] mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Phone</h4>
                <p className="text-white/80">+91 (22) 2670 7440</p>
                <p className="text-white/80">+91 (22) 2670 7441</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#00BFFF] mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Email</h4>
                <p className="text-white/80">info@spit.ac.in</p>
                <p className="text-white/80">principal@spit.ac.in</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#00BFFF] mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Office Hours</h4>
                <p className="text-white/80">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-white/80">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-[#00BFFF] mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Website</h4>
                <p className="text-white/80">www.spit.ac.in</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Department Contacts */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-[#FFD700] mb-6">Department Contacts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6"
            >
              <h4 className="text-lg font-bold text-white mb-3">{dept.name}</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#00BFFF]" />
                  {dept.contact}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#00BFFF]" />
                  {dept.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00BFFF]" />
                  {dept.timing}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Personnel */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-[#FFD700] mb-6">Key Personnel</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyPersonnel.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white/50" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white">{person.name}</h4>
                  <p className="text-[#00BFFF] font-semibold mb-2">{person.position}</p>
                  <div className="space-y-1 text-sm text-white/80">
                    <p className="flex items-center gap-2">
                      <Mail className="w-3 h-3" />
                      {person.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-3 h-3" />
                      {person.phone}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6"
      >
        <h3 className="text-2xl font-bold text-[#FFD700] mb-6">Send us a Message</h3>
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

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-black/30 backdrop-blur-lg border border-[#00BFFF]/30 rounded-lg p-6"
      >
        <h3 className="text-2xl font-bold text-[#FFD700] mb-6">Location</h3>
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.4709154135721!2d72.835634613488!3d19.12308312390606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan's%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1748075101979!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </div>
  );
};