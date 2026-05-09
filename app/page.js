"use client";

import { useRef, useState } from "react";
import html2canvas from "html2canvas";

export default function Home() {
  const posterRef = useRef();

  const [title, setTitle] = useState("MARKA-E-HAQ WEEK");
  const [desc, setDesc] = useState("Create stunning museum-style AI posters instantly.");
  const [theme, setTheme] = useState("dark");

  const downloadPoster = async () => {
    const canvas = await html2canvas(posterRef.current);
    const link = document.createElement("a");
    link.download = "posterforge-ai.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-6">

      {/* HEADER */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-400">PosterForge AI</h1>
        <p className="text-gray-400 mt-2">
          Design museum-quality posters in seconds
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">

        {/* INPUT PANEL */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800">

          <h2 className="text-xl font-semibold mb-4">Create Poster</h2>

          <label className="text-sm text-gray-400">Title</label>
          <input
            className="w-full p-3 rounded bg-gray-800 mb-4 mt-1 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="text-sm text-gray-400">Description</label>
          <textarea
            className="w-full p-3 rounded bg-gray-800 mb-4 mt-1 outline-none"
            rows="4"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <button
            onClick={downloadPoster}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-xl transition"
          >
            Download Poster
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Premium AI Design Engine • Auto Layout • Print Ready
          </p>
        </div>

        {/* POSTER PREVIEW */}
        <div className="flex justify-center items-center">

          <div
            ref={posterRef}
            className="w-[420px] h-[600px] bg-gradient-to-b from-black to-gray-900 border-4 border-yellow-500 rounded-xl p-8 flex flex-col justify-center text-center shadow-2xl"
          >
            <h1 className="text-3xl font-bold text-yellow-400 mb-4">
              {title}
            </h1>

            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>

            <p className="text-gray-300 text-lg leading-relaxed">
              {desc}
            </p>

            <div className="mt-auto text-xs text-gray-500">
              PosterForge AI • Museum Edition • 2026
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
