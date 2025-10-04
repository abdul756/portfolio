'use client';

export default function Projects() {
  const projects = [
    {
      title: "Personalized Sticker Generator",
      description: "Finetuned SDXL-based diffusion model deployed on GCP for personalized sticker generation, achieving 40% latency reduction using GCP Pub/Sub to serve millions of users.",
      technologies: ["SDXL", "Diffusion Models", "GCP", "Pub/Sub"],
      impact: "40% latency reduction • Millions of users",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "AI Story Generator",
      description: "End-to-end AI-based story generator using InsightFace and CodeFormer with GCP Pub/Sub. Optimized workflow from 8s to 2s (4× faster) and improved throughput by 107%.",
      technologies: ["InsightFace", "CodeFormer", "GCP", "Multiprocessing"],
      impact: "4× faster • 107% throughput improvement",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Face Frontalization",
      description: "StyleGAN-based face frontalization model deployed on GCP. Reduced inference time from 1s to 0.6s on CPU, cut model size from 758MB to 159MB (75% reduction), achieving 0.76 SSIM score.",
      technologies: ["StyleGAN", "Flask", "GCP", "Model Optimization"],
      impact: "75% size reduction • 0.76 SSIM • Patent Filed",
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Image Enhancer API",
      description: "GFPGAN-based image enhancer API deployed on GCP, improving sticker quality by 5× with fast inference time of 1.5–2s per request serving production traffic.",
      technologies: ["GFPGAN", "Flask", "GCP", "REST API"],
      impact: "5× quality improvement • 1.5-2s inference",
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Vector Search System",
      description: "Production vector search system using Redis Vector DB and Text-Embedding-Inference Engine with Flask, improving search relevance by 70% for semantic search capabilities.",
      technologies: ["Redis Vector DB", "Text Embeddings", "Flask", "Python"],
      impact: "70% search relevance improvement",
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      title: "Cartoon Generation Model",
      description: "GAN-based cartoon generation model deployed on AWS. Reduced model size from 256MB to 11MB (95% reduction) for efficient edge deployment while maintaining quality.",
      technologies: ["GAN", "Flask", "AWS", "Model Compression"],
      impact: "95% size reduction • Efficient deployment",
      gradient: "from-pink-600 to-purple-600"
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Production AI Projects
          </h2>
          <p className="text-gray-400 text-lg mb-4">Deployed at Bobble AI • Serving Millions of Users</p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)]"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl -z-10"></div>

              <div className="relative p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 mb-4 min-h-[100px] group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>

                <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-green-400 font-semibold">{project.impact}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-sm rounded-full text-gray-300 border border-gray-700 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-horizontal"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
