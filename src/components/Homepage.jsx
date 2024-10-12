"use client"

import Image from "next/image"
import Link from "next/link"
import { Twitter, Youtube, Facebook, Instagram, Linkedin } from "lucide-react"
import { useState, useEffect } from "react"
import About from "./About"
import Services from "./Services"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Footer from "./Footer"

const roles = [ "UI/UX Designer", "Logo Designer", "Brand Identity"]
const socialLinks = [
    // { icon: Twitter, url: "https://twitter.com/yourprofile" },
    { icon: Youtube , url: "https://youtube.com/@designeraatir?si=ZNUuSieVCanADakF" },
    { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61565506605525&mibextid=ZbWKwL" },
    { icon: Instagram, url: "https://www.instagram.com/designerraatir?igsh=emUwYm9jbGVjZXB5" },
    {icon: Linkedin , url: "https://www.linkedin.com/in/aatir-husen-9a66b2328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
  ];
export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
      } else {
        setText((prevText) =>
          isDeleting ? prevText.slice(0, -1) : `${prevText}${currentRole[prevText.length]}`
        )
      }
    }, isDeleting ? 50 : 150)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <>
    <section id="home">
    <div className="min-h-screen md:pl-[60px]  md:pt-10 md:px-[40px] bg-gray-900 text-white">

     
      <main className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-4xl font-bold">
            Hello It&apos;s Me
            <br />
            <span className="text-6xl text-cyan-400">Aatir Husain</span>
          </h2>
          <p className="text-2xl">
            And I&apos;m a <span className="text-cyan-400">{text}</span>
            <span className="animate-blink">|</span>
          </p>
          <p className="text-gray-400 max-w-md">
          As a passionate designer, I believe in the power of visual storytelling. My work combines creativity and functionality, creating user-centered designs that engage and inspire. With a keen eye for detail, I strive to transform ideas into stunning visuals that leave a lasting impression and elevate brand experiences.
          </p>
          <div className="flex space-x-4">
          {socialLinks.map(({ icon: Icon, url }, index) => (
              <Link
                key={index}
                href={url} // Use the actual URL for the link
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practices
                className="bg-gray-800 p-2 rounded-full hover:bg-cyan-400 transition-colors"
              >
                <Icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
          {/* <button className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-cyan-300 transition-colors">
            Download CV
          </button> */}
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-75"></div>
            {/* <Image
              src="/Assets/pfp2.png"
              alt="Profile"
              width={320}
              height={320}
              
              className="rounded-full object-cover  relative z-10"
            /> */}
          </div>
        </div>
      </main>
      </div>
      </section>
      <About/>
      <Services/>
      <Portfolio/>
      
      <Contact/>
      <Footer/>
      
      </>

    
  )
}