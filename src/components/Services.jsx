import React from 'react';
import { Paintbrush, Code, Globe, Tag, Package } from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'LOGO Design',
    description: 'A Visually appealing and Premium Logo design which resonate with your Brand and attract your potential customers. Weather its a New Fresh Logo or a Redesign of your existing Logo.',
  },
  {
    icon: Tag,
    title: 'Branding',
    description: 'Complete Brand Identity design for your Business. We will take care of a Great visual presence of your business in the market Including Logo, Social media Graphics, Packaging and stationary designs.',
  },
  {
    icon: Package,
    title: 'Customized package',
    description: 'A fully customized design project based on your needs related to design aspect in your Business.',
  },
];

export default function Services() {
  return (
    <section id='services' className="bg-gray-900 text-white py-16 ">
      <div className="min-h-screen  container mx-auto px-4 md:px-[40px]">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our <span className="text-cyan-400">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-800 border border-gray-700 rounded-lg p-6 transition-transform transform hover:-translate-y-2 hover:ring-2 hover:ring-blue-500 hover:shadow-lg`}
>
              <div className="flex flex-col items-center mb-4">
                <service.icon className="w-12 h-12 text-cyan-400" />
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <button
                className="text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 py-2 px-4 rounded-md transition-colors duration-300"
              >
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
