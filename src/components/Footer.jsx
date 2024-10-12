import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300  py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:ml-[100px] md:grid-cols-2 gap-12">
          {/* Contact Information */}
  <div className="space-y-5">
    <h3 className="text-xl font-bold mb-7 text-white">Contact Information</h3>
    
    <div className="md:flex md:space-x-6 md:items-center">
      {/* Phone */}
      <div className="flex items-center space-x-3">
        <Phone className="h-5 w-5 text-cyan-400" />
        <span> +91 76982 18174</span>
      </div>
      {/* Email */}
      <div className="flex items-center space-x-3">
        <Mail className="h-5 w-5 text-cyan-400" />
        <a
          href="mailto:your.email@example.com"
          className="hover:underline text-gray-300 hover:text-white transition-colors"
        >
          designeraatir@gmail.com
        </a>
      </div>
    </div>
  </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="md:flex md:space-x-6 flex-wrap">
              <li><a href="#home" className="hover:underline hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:underline hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:underline hover:text-cyan-400 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:underline hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        {/* <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © {currentYear} A. All rights reserved.
        </div> */}
      </div>
    </footer>
  );
}
