export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 bg-gray-950">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:manaf4071@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                      manaf4071@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+918075805684" className="text-white hover:text-blue-400 transition-colors">
                      +91 8075805684
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/abdul756"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/abdul-manaf-f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Quick Stats</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Experience</span>
                <span className="text-2xl font-bold text-blue-400">3+ Years</span>
              </div>
              <div className="h-px bg-gray-800"></div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Projects Deployed</span>
                <span className="text-2xl font-bold text-purple-400">6+</span>
              </div>
              <div className="h-px bg-gray-800"></div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Publications</span>
                <span className="text-2xl font-bold text-pink-400">6+</span>
              </div>
              <div className="h-px bg-gray-800"></div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Citations</span>
                <span className="text-2xl font-bold text-green-400">80+</span>
              </div>
              <div className="h-px bg-gray-800"></div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Patents</span>
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/30">
              <p className="text-sm text-gray-300 text-center">
                Open to exciting opportunities in <span className="text-blue-400 font-semibold">AI & Computer Vision</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>&copy; 2024 Abdul Manaf F. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
