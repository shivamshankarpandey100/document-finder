import React from "react";

// Feature data
const features = [
  {
    title: "Instant Upload & Indexing",
    description:
      "Effortlessly upload documents (PDF, DOCX, images) and have them indexed immediately using AI-powered text extraction.",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
    imageAlt: "Document Upload Icon",
  },
  {
    title: "Smart Organization",
    description:
      "Automatically categorize and tag your documents with AI-driven classification for seamless organization and retrieval.",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/3676/3676451.png",
    imageAlt: "File Icon",
  },
  {
    title: "AI-Powered Text Extraction",
    description:
      "Utilize Optical Character Recognition (OCR) to accurately extract text from all document types, including scanned images.",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/2619/2619557.png",
    imageAlt: "AI Text Extraction Icon",
  },
  {
    title: "Secure Search Query",
    description:
      "Access your documents with encrypted search queries that maintain privacy while delivering instant, accurate results.",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/6530/6530263.png",
    imageAlt: "Search Magnifier Icon",
  },
  {
    title: "Powerful Full-Text Search",
    description:
      "Search across thousands of documents instantly with a robust indexing system, finding keywords and phrases inside the content.",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/1004/1004735.png",
    imageAlt: "Search Storage Icon",
  },
  {
    title: "Secure & Organized Storage",
    description:
      "Keep all your critical documents securely stored and easily categorized for quick retrieval and management.",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/484/484573.png",
    imageAlt: "Secure Storage Icon",
  },
];

// Feature Card Component
const FeatureCard = ({ title, description, imageSrc, imageAlt, index }) => {
  return (
    <div
      className="group relative flex items-start gap-5 p-6 transition-all duration-500 rounded-2xl w-full 
                 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl 
                 border border-gray-200/50 dark:border-gray-700/50
                 hover:shadow-2xl hover:-translate-y-1 hover:border-indigo-400/50 dark:hover:border-indigo-500/50
                 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
        <img
          src={imageSrc}
          alt={imageAlt}
          width={32}
          height={32}
          className="drop-shadow-md filter brightness-0 invert"
        />
      </div>

      <div className="relative text-left flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950 flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <main className="relative flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <header className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                AI-Powered Document Management
              </span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 tracking-tight mb-6 leading-tight">
              Document Manager
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              The ultimate solution for seamless document management. Upload, process, and{" "}
              <span className="font-bold text-indigo-600 dark:text-indigo-400">search documents instantly</span>{" "}
              with cutting-edge AI technology.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                Get Started Free
              </button>
              <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transform hover:-translate-y-0.5 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </header>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {[
              { number: "10M+", label: "Documents Processed" },
              { number: "99.9%", label: "Accuracy Rate" },
              { number: "<1s", label: "Search Speed" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Everything you need to manage, search, and organize your documents efficiently
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16 p-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-2xl text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Document Workflow?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations using Document Manager to streamline their operations
            </p>
            <button className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105 transition-all duration-300">
              Start Your Free Trial
            </button>
          </section>

          {/* Footer */}
          <footer className="text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex justify-center items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Document Manager</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              © {new Date().getFullYear()} Document Manager | OCR + Search Automation System
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Built with ❤️ by <span className="font-semibold text-indigo-600 dark:text-indigo-400">Shivam</span> using React + Tailwind CSS
            </p>
          </footer>
        </div>
      </main>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}