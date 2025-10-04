'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient-shift"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* 3D floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"
          style={{
            bottom: '20%',
            right: '10%',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <div className="text-center">
          {/* AI Vision Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <div className="relative bg-black border-2 border-blue-500 rounded-full p-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
            <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
              Abdul Manaf F
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 animate-fade-in-up [animation-delay:0.2s]">
            Software Engineer II (AI Domain)
          </p>

          <p className="text-lg md:text-xl text-blue-400 mb-8 font-mono animate-fade-in-up [animation-delay:0.4s]">
            Deep Learning • Computer Vision • GANs • Neural Networks
          </p>

          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up [animation-delay:0.6s]">
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group relative px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              <span className="relative z-10">Contact Me</span>
            </a>
          </div>

          {/* Scanning line effect */}
          <div className="mt-12 relative h-32 overflow-hidden rounded-lg border border-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent h-8 animate-scan"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-blue-400/50 font-mono text-sm">
                [SYSTEM READY] Deep Learning Models Initialized • 3+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
