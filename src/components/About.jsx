import React from 'react';
import Image from 'next/image'; // Importing Image component from Next.js

export default function About() {
  return (
    <section id='about' className="bg-gray-700 text-white ">
      <div className=" md:min-h-screen  container md:max-h-[-10px] mx-auto px-4 flex flex-col md:flex-row items-center md:px-[40px]">
        <div className="  md:w-1/2 mb-8 md:mb-0">
          <div className="hidden md:block relative w-64 h-64 mx-auto">
            {/* Circular background with blur effect */}
            <div className="absolute  inset-0 bg-cyan-400 rounded-full blur-2xl opacity-75"></div>
            {/* Circular profile image */}
            <Image
              src="https://res.cloudinary.com/dzntvx1ws/image/upload/v1728732274/main/Pfps/pp2quysbyp9pcybyeuv6.png"
              alt="Profile"
              width={320}
              height={320}
              className="rounded-full object-cover relative z-10 transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Crafting Brands That Resonate.
          </h3>
          <p className="text-gray-400 mb-6 text-center md:text-left">
          As a dedicated logo and brand identity designer, I believe that every brand has a unique story to tell. My passion lies in transforming these stories into visually compelling and memorable identities.

With  years of experience in the design industry, I have honed my skills in creating logos that are not only aesthetically pleasing but also strategically aligned with a brand&apos;s values and target audience. I specialize in minimalist, luxurious and modern designs.

My design process involves a collaborative approach, where I work closely with clients to understand their vision and goals. I believe that a successful brand identity is the result of a strong partnership between designer and client.

I am committed to delivering high-quality designs that exceed expectations and help clients achieve their business objectives. Let&apos;s create a brand identity that truly stands out.
          </p>
          <div className="text-center md:text-left">
            {/* <button className="bg-cyan-400 text-gray-900 hover:bg-cyan-300 px-6 py-2 rounded-md transition-colors duration-200">
              See More
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
