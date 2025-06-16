import React from "react";
import { useState } from "react";

function SelectDuration({ onUserSelect }) {
  const durationOptions = [
    { label: "Short (15 seconds)", value: "short" },
    { label: "Medium (30 seconds)", value: "medium" },
    { label: "Long (1 minute)", value: "long" },
  ];
  const [selectedDuration, setSelectedDuration] = useState("");
  return (
    <div>
      <h2 className="font-bold text-xl mt-10 mb-2">Select a Duration</h2>
      <p className="text-gray-600 mb-2">Choose a duration for your video.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 cursor-pointer">
        {durationOptions.map((option) => (
          <div
            key={option.value}
            onClick={() => {
              setSelectedDuration(option.value);
              onUserSelect("duration", option.value);
            }}
            className={`border border-gray-300 rounded-md p-3 hover:shadow-lg transition-shadow duration-200 ${
              selectedDuration === option.value ? "bg-blue-200" : "bg-white"
            }`}
          >
            <h3 className="font-semibold">{option.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectDuration;
