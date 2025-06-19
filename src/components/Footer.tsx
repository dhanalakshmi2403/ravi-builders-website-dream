
import React from 'react';
import { Building, Mail, Phone, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-terracotta-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RB</span>
                </div>
                <span className="text-2xl font-bold">Ravi Builders</span>
              </div>
              <p className="text-stone-300 mb-6 leading-relaxed text-lg">
                We Build Your Dreams into Reality. With over 15 years of experience, we are your trusted partner for all construction needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-terracotta-400" />
                  <span className="text-stone-300">123 Construction Avenue, Mumbai, Maharashtra 400001</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-terracotta-400" />
                  <span className="text-stone-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-terracotta-400" />
                  <span className="text-stone-300">info@ravibuilders.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-stone-300 hover:text-terracotta-400 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-stone-300 hover:text-terracotta-400 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-stone-300 hover:text-terracotta-400 transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-stone-300 hover:text-terracotta-400 transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-stone-300 hover:text-terracotta-400 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-stone-700 rounded-lg flex items-center justify-center hover:bg-terracotta-500 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-stone-700 rounded-lg flex items-center justify-center hover:bg-terracotta-500 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-stone-700 rounded-lg flex items-center justify-center hover:bg-terracotta-500 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-stone-700 rounded-lg flex items-center justify-center hover:bg-terracotta-500 transition-colors duration-300"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Business Hours</h4>
                <p className="text-stone-300 text-sm">
                  Monday - Saturday: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 mt-12 pt-8 text-center">
            <p className="text-stone-400">
              © 2024 Ravi Builders. All rights reserved. | Built with excellence since 2008
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
