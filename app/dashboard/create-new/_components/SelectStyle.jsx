"use client";
import React from "react";
import { useState } from "react";

const SelectStyle = ({ onUserSelect }) => {
  const styleOptions = [
    {
      name: "Realistic",
      description: "A realistic style that mimics real-world visuals.",
      value: "realistic",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Cartoon",
      description:
        "A cartoon style with exaggerated features and bright colors.",
      value: "cartoon",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Abstract",
      description:
        "An abstract style focusing on shapes and colors rather than realism.",
      value: "abstract",
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Minimalist",
      description: "A minimalist style with simple lines and few details.",
      value: "minimalist",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Vintage",
      description: "A vintage style that evokes a sense of nostalgia.",
      value: "vintage",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    },

    {
      name: "Sci-Fi",
      description:
        "A sci-fi style that incorporates elements of science fiction.",
      value: "sci-fi",
      image:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Horror",
      description: "A horror style that creates a sense of fear and suspense.",
      value: "horror",
      image:
        "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Comedy",
      description: "A comedy style that uses humor and light-hearted visuals.",
      value: "comedy",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const [styleValue, setStyleValue] = useState("");

  return (
    <div>
      <h2 className="font-bold text-xl mt-10 mb-2">Select a Style</h2>
      <p className="text-gray-600 mb-2">Choose a style for your video.</p>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 cursor-pointer">
          {styleOptions.map((style) => (
            <div
              key={style.value}
              onClick={() => {
                setStyleValue(style.value);
                onUserSelect("style", style.value);
              }}
              className={`border border-gray-300 rounded-md p-3 hover:shadow-lg transition-shadow duration-200 ${
                styleValue === style.value ? "bg-blue-200" : "bg-white"
              }`}
            >
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <h3 className="font-semibold">{style.name}</h3>
              <p className="text-sm text-gray-500">{style.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectStyle;
