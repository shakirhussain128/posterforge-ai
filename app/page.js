"use client";

import { useRef, useState } from "react";
import html2canvas from "html2canvas";

export default function Home() {
  const posterRef = useRef();
  const [title, setTitle] = useState("MARKA-E-HAQ WEEK");
  const [desc, setDesc] = useState("AI Museum Poster Generator");

  const download = async () => {
    const canvas = await html2canvas(posterRef.current);
    const link = document.createElement("a");
    link.download = "poster.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div style={{ padding: 30, background: "#111", minHeight: "100vh", color: "white" }}>

      <h1>PosterForge AI</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ padding: 10, margin: 10 }}
      />

      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
        style={{ padding: 10, margin: 10 }}
      />

      <button onClick={download} style={{ padding: 10 }}>
        Download Poster
      </button>

      <div
        ref={posterRef}
        style={{
          width: 600,
          height: 800,
          background: "linear-gradient(black, #333)",
          marginTop: 20,
          padding: 40,
          border: "3px solid gold"
        }}
      >
        <h1 style={{ color: "gold" }}>{title}</h1>
        <p>{desc}</p>
        <p style={{ marginTop: 200, fontSize: 12 }}>
          PosterForge AI • Museum Edition
        </p>
      </div>
    </div>
  );
}
