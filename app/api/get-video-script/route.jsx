import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    console.log("prompt:", prompt);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
    const chatSession = model.startChat();
    const result = await chatSession.sendMessage(prompt);
    const text = result.response.text();

    return NextResponse.json(
      {
        result: text,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Failed to generate video script",
    });
  }
}
