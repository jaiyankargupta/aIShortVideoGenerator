import { ElevenLabsClient, play } from "@elevenlabs/elevenlabs-js";

const elevenlabs = new ElevenLabsClient({
  apiKey: "process.env.NEXT_PUBLIC_ELEVEN_LABS_API_KEY", // Defaults to process.env.ELEVENLABS_API_KEY
});

const audio = await elevenlabs.textToSpeech.convert("Xb7hH8MSUJpSbSDYk0k2", {
  text: "Hello! 你好! Hola! नमस्ते! Bonjour! こんにちは! مرحبا! 안녕하세요! Ciao! Cześć! Привіт! வணக்கம்!",
  modelId: "eleven_multilingual_v2",
});

await play(audio);
