import React, { useState } from "react";
import axios from "axios";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please choose a file!");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/documents/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setUploaded(res.data);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-600 p-6">
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-xl p-10 rounded-3xl max-w-lg w-full text-center">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-white drop-shadow mb-3">
          Upload Document
        </h1>
        <p className="text-white/90 mb-8">
          Upload PDF, DOCX, or Images and process them instantly.
        </p>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
            alt="Upload Icon"
            className="w-24 opacity-90 drop-shadow-lg"
          />
        </div>

        {/* File Input */}
        <label className="block text-left text-white font-semibold mb-1">
          Choose File
        </label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="file:bg-indigo-600 file:text-white file:rounded-lg file:px-4 file:py-2 file:border-none 
          file:cursor-pointer bg-white/20 text-white placeholder-white w-full p-2 rounded-lg border border-white/40"
        />

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="w-full bg-white text-indigo-600 font-bold mt-6 py-3 rounded-lg 
          shadow-lg hover:bg-indigo-100 transition-all duration-300"
        >
          Upload File
        </button>

        {/* Upload Success Box */}
        {uploaded && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg border border-green-300 shadow">
            <p className="font-semibold">Uploaded Successfully ✔</p>
            <p className="text-sm mt-1">
              File: <strong>{uploaded.fileName}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
