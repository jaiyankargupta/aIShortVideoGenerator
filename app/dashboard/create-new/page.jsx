"use client";
import React from "react";
import { saveSRTToFile } from "../../api/save-caption/route";
import SelectTopic from "./_components/selectTopic";
import { useState } from "react";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "../../../components/ui/button";
import axios from "axios";
import CustomLoading from "./_components/CustomLoading";

const CreateNew = () => {
  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
    setFormData((prevData) => {
      const updatedData = { ...prevData, [fieldName]: fieldValue };
      console.log("Form Data Updated:", updatedData);
      return updatedData;
    });
  };

  const [loading, setLoading] = useState(false);

  //get video script from OpenAI API

  const getVideoScript = async () => {
    setLoading(!loading);
    const prompt = `Write a single, emotionally engaging prompt for an AI-generated short video on the topic "${formData.topic}" in "${formData.style}" style, duration "${formData.duration}". The prompt should combine vivid visual details and narration into one concise, emotionally rich description (max 100 words). Do not include any code, code blocks, titles, descriptions, or scene breakdowns. Only return the plain prompt text. not need of extra fields. For example: {prompt : "A lone violinist stands atop a misty hill at sunrise, her music weaving through golden light and swirling fog, evoking hope and longing as the world awakens around her."}`;

    const result = await axios
      .post("/api/get-video-script", {
        prompt: prompt,
      })
      .then((res) => {
        const voice = createVoice(res.data.result);

        return res.data.result;
      })
      .catch((error) => {
        console.error("Error fetching video script:", error);
      });
  };

  const createVoice = async (prompt) => {
    if (!prompt) return;

    try {
      // Step 1: Generate audio blob
      const response = await axios.post(
        "/api/generate-speech",
        { text: prompt },
        { responseType: "blob" }
      );

      const blob = response.data;

      // Step 2: Save the audio to disk via /api/save-audio
      const formData = new FormData();
      formData.append("file", blob, "voice.mp3");

      const saveResponse = await axios.post("/api/save-audio", formData);

      // Step 3: Save the caption using the same prompt
      const captionResponse = await axios.post("/api/save-caption", {
        scriptText: prompt,
      });
    } catch (err) {
      console.error("❌ Error:", err);
    }
  };

  return (
    <div className="md:px-20">
      <h2 className="font-bold text-4xl text-center">Create New</h2>

      <div className="mt-10 shadow-md p-10">
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />
        <Button className="mt-10 w-full" onClick={() => getVideoScript()}>
          Create your short video
        </Button>
      </div>
      <CustomLoading loading={loading} onCancel={() => setLoading(false)} />
    </div>
  );
};

export default CreateNew;
