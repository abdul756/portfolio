export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-4 md:px-8 lg:px-16 py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-8">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-1">Software Engineer II</h3>
                <p className="text-lg text-blue-400 font-semibold">Bobble AI</p>
                <p className="text-sm text-gray-500">Artificial Intelligence Domain</p>
              </div>
              <span className="text-gray-500 mt-2 md:mt-0 font-medium">Feb 2022 – Present</span>
            </div>

            <div className="space-y-6 mt-6">
              {/* Project summaries */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <h4 className="font-semibold text-white">Personalized Sticker Generator</h4>
                  </div>
                  <p className="text-sm text-gray-400">SDXL diffusion model • 40% latency reduction</p>
                </div>

                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <h4 className="font-semibold text-white">AI Story Generator</h4>
                  </div>
                  <p className="text-sm text-gray-400">4× faster workflow • 107% throughput boost</p>
                </div>

                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <h4 className="font-semibold text-white">Face Frontalization</h4>
                  </div>
                  <p className="text-sm text-gray-400">75% model size reduction • Patent filed</p>
                </div>

                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <h4 className="font-semibold text-white">Image Enhancer API</h4>
                  </div>
                  <p className="text-sm text-gray-400">5× quality improvement • Production deployed</p>
                </div>

                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-indigo-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <h4 className="font-semibold text-white">Vector Search System</h4>
                  </div>
                  <p className="text-sm text-gray-400">70% relevance improvement • Redis Vector DB</p>
                </div>

                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-pink-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <h4 className="font-semibold text-white">Cartoon Generation</h4>
                  </div>
                  <p className="text-sm text-gray-400">95% size reduction • Efficient deployment</p>
                </div>
              </div>

              {/* Key achievements */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/30">
                <h4 className="font-semibold text-blue-400 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Key Achievements
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Deployed 6+ production AI systems serving millions of users
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Achieved significant performance improvements: 4× speed, 40-75% size reductions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Filed 1 patent for Face Frontalization technology
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Expertise in GANs, Diffusion Models, and Computer Vision at scale
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
