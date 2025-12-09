// import React, { useState } from "react";
// import axios from "axios";

// // DocumentCard Component
// function DocumentCard({ doc }) {
//   return (
//     <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-5 flex flex-col justify-between">

//       {/* File Name */}
//       <h2 className="text-lg font-semibold text-gray-800 mb-2">
//         {doc.fileName}
//       </h2>

//       {/* Snippet */}
//       <p className="text-gray-600 mb-4">
//         {doc.snippet || "No preview available"}
//       </p>

//       <div className="flex justify-between items-center mt-auto">

//         {/* Document ID */}
//         <span className="text-sm text-gray-500">ID: {doc.id}</span>

//         {/* View / Download Link */}
//         <a
//           href={`http://localhost:8080/api/documents/${doc.id}/download`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 hover:underline text-sm"
//         >
//           View
//         </a>
//       </div>
//     </div>
//   );
// }


// // SearchPage Component
// export default function SearchPage() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     if (!query.trim()) return;

//     try {
//       const res = await axios.get(
//         `http://localhost:8080/api/documents/search/meta?q=${query}`
//       );
//       setResults(res.data);
//     } catch (error) {
//       console.error("Search error:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-600 p-6">
//       <div className="max-w-4xl mx-auto">

//         {/* Title */}
//         <h1 className="text-3xl font-bold text-center text-white mb-8 drop-shadow">
//           Search Documents
//         </h1>

//         {/* Search Bar */}
//         <div
//           className="flex items-center gap-3 mb-16 p-2 w-full max-w-4xl mx-auto rounded-full shadow-2xl 
//                      bg-gradient-to-r from-red-400 via-green-400 to-green-600"
//         >
//           {/* Input Field */}
//           <input
//             type="text"
//             placeholder="Type document name or keywords..."
//             className="bg-white/90 text-gray-800 p-3 pl-6 rounded-full flex-grow 
//                        focus:outline-none focus:ring-2 focus:ring-blue-300"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//           />

//           {/* Search Button */}
//           <button
//             onClick={handleSearch}
//             className="bg-green-600 text-white px-6 py-3 rounded-full 
//                        hover:bg-green-500 transition shadow-lg"
//           >
//             Search
//           </button>
//         </div>

//         {/* Results */}
//         {results.length === 0 ? (
//           <p className="text-center text-white/90 mt-20 text-lg">
//             No documents found. Try searching something else.
//           </p>
//         ) : (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {results.map((doc) => (
//               <DocumentCard key={doc.id} doc={doc} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";

// -------------------------
// Modal Component
// -------------------------
function PreviewModal({ fileUrl, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] md:w-[70%] lg:w-[60%] rounded-xl shadow-xl p-6 relative">

        {/* Title */}
        <h2 className="text-xl font-bold mb-4 text-gray-800">Document Preview</h2>

        {/* File Preview */}
        <div className="border rounded-lg overflow-hidden h-[500px]">
          <iframe
            src={fileUrl}
            className="w-full h-full"
            title="Document Preview"
          ></iframe>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">

          <a
            href={fileUrl}
            download
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Download
          </a>

          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
}

// -------------------------
// Document Card Component
// -------------------------
function DocumentCard({ doc, onView }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-5 flex flex-col justify-between">

      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {doc.fileName}
      </h2>

      <p className="text-gray-600 mb-4">
        {doc.snippet || "No preview available"}
      </p>

      <div className="flex justify-between items-center mt-auto">
        <span className="text-sm text-gray-500">ID: {doc.id}</span>

        {/* Open modal instead of direct download */}
        <button
          onClick={() => onView(doc.id)}
          className="text-blue-600 hover:underline text-sm"
        >
          View
        </button>
      </div>
    </div>
  );
}

// -------------------------
// Main Search Page
// -------------------------
export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const res = await axios.get(
        `http://localhost:8080/api/documents/search/meta?q=${query}`
      );
      setResults(res.data);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  // Open modal & set URL
  const openPreview = (id) => {
    const url = `http://localhost:8080/api/documents/${id}/download?action=preview`;
    setPreviewUrl(url);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-600 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-center text-white mb-8 drop-shadow">
          Search Documents
        </h1>

        {/* Search Bar */}
        <div className="flex items-center gap-3 mb-16 p-2 w-full max-w-4xl mx-auto rounded-full shadow-2xl 
                     bg-gradient-to-r from-red-400 via-green-400 to-green-600">

          <input
            type="text"
            placeholder="Type document name or keywords..."
            className="bg-white/90 text-gray-800 p-3 pl-6 rounded-full flex-grow 
                       focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-6 py-3 rounded-full 
                       hover:bg-green-500 transition shadow-lg"
          >
            Search
          </button>
        </div>

        {/* Results */}
        {results.length === 0 ? (
          <p className="text-center text-white/90 mt-20 text-lg">
            No documents found. Try searching something else.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((doc) => (
              <DocumentCard key={doc.id} doc={doc} onView={openPreview} />
            ))}
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {isModalOpen && (
        <PreviewModal
          fileUrl={previewUrl}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
