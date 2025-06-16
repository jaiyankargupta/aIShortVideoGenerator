"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../@/components/ui/select";
import React from "react";

const SelectTopic = ({ onUserSelect }) => {
  const options = [
    "Custom Prompt",
    "Random AI Story",
    "Scary Story",
    "Funny Story",
    "Inspirational Story",
  ];

  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      <h2 className="font-bold text-xl ">Content</h2>
      <p className="text-gray-500 mb-3">what is the topic of your video</p>
      <Select
        onValueChange={(value) => {
          setSelectedOption(value);
          value != "Custom Prompt" && onUserSelect("topic", value);
        }}
      >
        <SelectTrigger className="w-full mt-2 border-gray-300 hover:border-gray-400 focus:border-blue-500">
          <SelectValue placeholder="Select topic" />
        </SelectTrigger>
        <SelectContent>
          {options.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedOption == "Custom Prompt" && (
        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Custom Prompt
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Enter your custom prompt here..."
            onChange={(e) => onUserSelect("topic", e.target.value)}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default SelectTopic;
