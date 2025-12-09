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
    title: "Title Placeholder",
    description:
      "Replace this with your custom feature description. This card serves as a placeholder for the second column item.",
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
      "Access your documents by searching securely. This card is a placeholder for the fourth grid item.",
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
const FeatureCard = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <div
      className="flex items-start gap-4 p-5 transition-all duration-300 rounded-xl w-full 
                 bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-lg 
                 border border-white/40 dark:border-white/10 
                 hover:scale-[1.03] hover:shadow-2xl"
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        width={45}
        height={45}
        className="drop-shadow-md"
      />

      <div className="text-left">
        <h3 className="text-lg font-bold text-indigo-800 dark:text-indigo-300 mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-600 flex flex-col">
      <main className="flex-1 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Box */}
          <header className="text-center mb-16 p-12 bg-white/40 dark:bg-black/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 dark:border-white/10">
            <h1 className="text-5xl font-extrabold text-indigo-900 dark:text-indigo-200 tracking-tight mb-4">
              ✨ Document Manager
            </h1>
            <p className="text-lg text-gray-800 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The ultimate <b>AI-powered solution</b> for seamless document
              management. Upload, process, and <b>search documents instantly</b>{" "}
              with cutting-edge technology.
            </p>
          </header>

          {/* Features Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </section>

          {/* Footer Card */}
          <footer className="p-8 bg-white/40 dark:bg-black/40 backdrop-blur-lg rounded-3xl shadow-xl border border-white/50 dark:border-white/10 text-center">
            <p className="text-sm text-gray-700 dark:text-gray-400">
              © {new Date().getFullYear()} <b>Document Manager</b> | OCR + Search
              Automation System.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Built with ❤️ by <b>Shivam</b> using React + Tailwind CSS.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
