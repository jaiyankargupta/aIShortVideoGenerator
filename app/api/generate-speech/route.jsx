import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

const client = new ElevenLabsClient({
  apiKey: process.env.NEXT_PUBLIC_ELEVEN_LABS_API_KEY,
});

export async function POST(req) {
  try {
    const { text } = await req.json();

    const audio = await client.textToSpeech.convert("JBFqnCBsd6RMkjVDRZzb", {
      outputFormat: "mp3_44100_128",
      text: text,
      modelId: "eleven_multilingual_v2",
    });

    return new Response(audio, {
      headers: {
        "Content-Type": "audio/mpeg",
      },
    });
  } catch (error) {
    console.error("Error generating audio:", error);
    return new Response("Failed to generate audio", { status: 500 });
  }
}
