'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Logo and Brand identity design for a Book store",
    images: ["/Assets/Project-3/1.jpg", "/Assets/Project-1/2.jpg", "/Assets/Project-1/3.jpg","/Assets/Project-1/4.jpg" , "/Assets/Project-1/5.jpg" , "/Assets/Project-1/6.jpg" , "/Assets/Project-1/7.jpg"  , "/Assets/Project-1/8.jpg"],
    description: " A timeless and creative logo that embodies the essence of knowledge, literature, and imagination, crafted to strengthen the bookstore's unique brand presence.",
  },
  {
    id: 2,
    title: "Logo Design for a Footwear Brand",
    images: ["/Assets/Project-2/1.jpg", "/Assets/Project-2/2.jpg", "/Assets/Project-2/3.jpg","/Assets/Project-2/4.jpg" , "/Assets/Project-2/5.jpg" , "/Assets/Project-2/6.jpg" , "/Assets/Project-2/7.jpg"  , "/Assets/Project-2/8.jpg"],
    description: "A sleek and modern logo design that reflects the brand’s dedication to comfort, style, and innovation in footwear, resonating with its target audience.",
  },
  {
    id: 3,
    title: "Logo Design for a Perfume Brand",
    images: ["/Assets/Project-3/1.jpg", "/Assets/Project-3/2.jpg", "/Assets/Project-3/3.jpg","/Assets/Project-3/4.jpg" , "/Assets/Project-3/5.jpg" , "/Assets/Project-3/6.jpg" , "/Assets/Project-3/7.jpg"  , "/Assets/Project-3/8.jpg"],
    description: " An elegant and sophisticated logo representing luxury and fragrance, designed to evoke a sense of refinement and exclusivity for the perfume brand.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-800 text-foreground py-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="text-primary">Projects</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % project.images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [project.images.length]);

  return (
    <motion.div
      className="relative bg-card border border-border rounded-lg overflow-hidden shadow-lg group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Image Slider */}
      <div className="relative h-64 overflow-hidden">
        {/* <Image
          src={project.images[currentImage]}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        /> */}
        {/* Smooth overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.5 }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <motion.button
          className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View Project
        </motion.button>
      </div>
    </motion.div>
  );
}
