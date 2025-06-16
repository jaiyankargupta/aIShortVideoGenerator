// app/api/save-caption/route.js

"use server";

import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { generateSRT } from "../../../configs/generateSRT";

export async function POST(req) {
  try {
    const { scriptText } = await req.json();

    if (!scriptText) {
      return new Response("Missing scriptText", { status: 400 });
    }

    const srt = generateSRT(scriptText);
    const filename = `${uuidv4()}.srt`;
    const outputDir = path.join(process.cwd(), "public"); // or "output"

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    const filePath = path.join(outputDir, filename);
    fs.writeFileSync(filePath, srt);

    return Response.json({
      message: "Caption saved",
      path: `/public/${filename}`,
      filename,
    });
  } catch (error) {
    console.error("❌ Error saving caption:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
