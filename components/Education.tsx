export default function Education() {
  const publications = [
    {
      title: "Computer vision-based survey on human activity recognition system, challenges and applications",
      authors: "A. Manaf, S. Singh",
      venue: "3rd International Conference on Signal Processing and Communication, 2021",
      citations: 45
    },
    {
      title: "Automated Arabic long-tweet classification using transfer learning with BERT",
      authors: "M. Alruily, A. Manaf Fazal, A.M. Mostafa, M. Ezz",
      venue: "Applied Sciences, vol. 13 (6), 3482, 2023",
      citations: 26
    },
    {
      title: "A novel hybridization model for human activity recognition using stacked parallel LSTMs with 2D-CNN",
      authors: "A. Manaf, S. Singh",
      venue: "12th International Conference on Computing, Communication and Networking Technologies, 2021",
      citations: 7
    },
    {
      title: "Performance Analysis of Conditional GANs based Image-to-Image Translation Models for Low-Light Image Enhancement",
      authors: "N. Singh, A. Manaf, M. Rastogi, R. Prasad",
      venue: "8th International Conference on Signal Processing and Communication, 2022",
      citations: 2
    }
  ];

  return (
    <section id="education" className="min-h-screen px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Education & Research
        </h2>

        {/* Education */}
        <div className="mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-1">Master of Technology (M.Tech)</h3>
                <p className="text-lg text-blue-400">Electronics and Communication Engineering</p>
                <p className="text-gray-400 mt-1">Punjab Engineering College</p>
              </div>
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-center text-purple-400">Publications</h3>
          <p className="text-center text-gray-400 mb-8">6+ Publications • 80+ Total Citations • 1 Patent</p>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{pub.title}</h4>
                <p className="text-gray-400 text-sm mb-2">{pub.authors}</p>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className="text-gray-500 text-sm italic">{pub.venue}</p>
                  <div className="flex items-center gap-2 px-3 py-1 bg-purple-900/30 rounded-full border border-purple-500/30">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                    <span className="text-purple-400 text-sm font-semibold">{pub.citations} Citations</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patent */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-center text-green-400">Patent</h3>
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <svg className="w-12 h-12 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">System and Method for Generating a Frontal Facing View of a User</h4>
                <p className="text-gray-400 mb-2">Indian Patent Application No. 202411016454</p>
                <p className="text-sm text-gray-500">StyleGAN-based face frontalization technology for improving user experience in photo applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
