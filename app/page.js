"use client";

import { useRef, useState } from "react";
import html2canvas from "html2canvas";

export default function Home() {
  const canvasRef = useRef();

  const [title, setTitle] = useState("MARKA-E-HAQ WEEK");
  const [desc, setDesc] = useState("Design stunning posters like Canva with AI power.");
  const [color, setColor] = useState("#facc15");

  const download = async () => {
    const canvas = await html2canvas(canvasRef.current);
    const link = document.createElement("a");
    link.download = "posterforge-ai.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="h-screen bg-gray-950 text-white flex">

      {/* LEFT TOOL PANEL */}
      <div className="w-64 bg-gray-900 p-4 border-r border-gray-800">
        <h2 className="text-lg font-bold mb-4 text-yellow-400">Tools</h2>

        <label className="text-xs text-gray-400">Title</label>
        <input
          className="w-full p-2 bg-gray-800 rounded mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="text-xs text-gray-400">Description</label>
        <textarea
          className="w-full p-2 bg-gray-800 rounded mb-3"
          rows="4"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label className="text-xs text-gray-400">Accent Color</label>
        <input
          type="color"
          className="w-full h-10 mb-4"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <button
          onClick={download}
          className="w-full bg-yellow-500 text-black py-2 rounded font-bold"
        >
          Export PNG
        </button>
      </div>

      {/* CENTER CANVAS */}
      <div className="flex-1 flex items-center justify-center">

        <div
          ref={canvasRef}
          className="w-[450px] h-[650px] bg-gradient-to-b from-black to-gray-900 rounded-xl p-10 shadow-2xl border-4"
          style={{ borderColor: color }}
        >
          <h1
            className="text-3xl font-bold mb-4"
            style={{ color: color }}
          >
            {title}
          </h1>

          <div
            className="w-16 h-1 mb-6"
            style={{ backgroundColor: color }}
          ></div>

          <p className="text-gray-300 text-lg">
            {desc}
          </p>

          <div className="mt-10 text-xs text-gray-500">
            PosterForge AI • Canva-Style Editor V2
          </div>
        </div>

      </div>

      {/* RIGHT PANEL */}
      <div className="w-60 bg-gray-900 p-4 border-l border-gray-800">
        <h2 className="text-lg font-bold text-yellow-400 mb-4">Properties</h2>

        <div className="text-sm text-gray-400">
          ✔ Live Preview  
          ✔ Color System  
          ✔ Editable Text  
          ✔ Export Ready  
        </div>
      </div>

    </div>
  );
}
