export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              🚀 I am a <span className="text-blue-400 font-semibold">Software Engineer II (AI domain)</span> with <span className="text-purple-400 font-semibold">3+ years of experience</span> in deep learning and computer vision, specializing in deploying AI technologies to enhance business processes and user experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise lies in <span className="text-blue-400">Computer Vision</span>, <span className="text-purple-400">Neural Networks</span>, and <span className="text-pink-400">GANs</span>. I excel at crafting solutions that are perfectly aligned with real-world applications, transforming complex challenges into streamlined, powerful AI-driven solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With a solid background in Electronics and Communications Engineering from Punjab Engineering College, I&apos;ve successfully deployed multiple production-grade AI systems serving millions of users at <span className="text-blue-400 font-semibold">Bobble AI</span>.
            </p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Expertise</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start group">
                <span className="text-blue-400 mr-3 text-xl group-hover:scale-125 transition-transform">▸</span>
                <span><span className="font-semibold text-white">Deep Learning:</span> Computer Vision, Neural Networks, GANs</span>
              </li>
              <li className="flex items-start group">
                <span className="text-purple-400 mr-3 text-xl group-hover:scale-125 transition-transform">▸</span>
                <span><span className="font-semibold text-white">Deployment:</span> Docker, Flask, GCP, AWS</span>
              </li>
              <li className="flex items-start group">
                <span className="text-pink-400 mr-3 text-xl group-hover:scale-125 transition-transform">▸</span>
                <span><span className="font-semibold text-white">Tools:</span> PyTorch, TensorFlow, NumPy, Git</span>
              </li>
              <li className="flex items-start group">
                <span className="text-cyan-400 mr-3 text-xl group-hover:scale-125 transition-transform">▸</span>
                <span><span className="font-semibold text-white">Research:</span> 6+ Publications, 1 Patent, 80+ Citations</span>
              </li>
              <li className="flex items-start group">
                <span className="text-green-400 mr-3 text-xl group-hover:scale-125 transition-transform">▸</span>
                <span><span className="font-semibold text-white">Impact:</span> Serving millions of users with production AI systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
