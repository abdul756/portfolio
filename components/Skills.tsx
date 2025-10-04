export default function Skills() {
  const skillCategories = [
    {
      category: "Deep Learning",
      skills: ["Computer Vision", "Neural Networks", "GANs", "Diffusion Models", "StyleGAN", "GFPGAN"]
    },
    {
      category: "Frameworks & Tools",
      skills: ["PyTorch", "TensorFlow", "NumPy", "OpenCV", "InsightFace", "CodeFormer"]
    },
    {
      category: "Programming",
      skills: ["Python", "Flask", "REST APIs", "Multiprocessing", "Git"]
    },
    {
      category: "Deployment & Cloud",
      skills: ["Docker", "GCP", "AWS", "GCP Pub/Sub", "Model Optimization"]
    },
    {
      category: "Databases & Search",
      skills: ["Redis Vector DB", "Text Embeddings", "Semantic Search"]
    },
    {
      category: "Specializations",
      skills: ["Model Compression", "Latency Optimization", "Production AI", "Face Processing"]
    }
  ];

  const getSkillColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Deep Learning": "bg-purple-600",
      "Frameworks & Tools": "bg-blue-600",
      "Programming": "bg-cyan-600",
      "Deployment & Cloud": "bg-green-600",
      "Databases & Search": "bg-orange-600",
      "Specializations": "bg-pink-600"
    };
    return colors[category] || "bg-gray-600";
  };

  return (
    <section id="skills" className="min-h-screen px-4 md:px-8 lg:px-16 py-20 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)]"
            >
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${getSkillColor(category.category)}`}></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 ${getSkillColor(category.category)} text-white text-sm rounded-full font-medium hover:scale-110 transition-transform duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-blue-400">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Fundamentals of Computer Vision & Image Processing - OpenCV University",
              "Data Structures & Algorithms in Python - Coding Ninjas",
              "Artificial Intelligence Engineer - Simplilearn",
              "Spring of Realtime LLMs Bootcamp — Top 9 Project Builders — Pathway x KDAG IIT Kharagpur"
            ].map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-green-500/50 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-green-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
