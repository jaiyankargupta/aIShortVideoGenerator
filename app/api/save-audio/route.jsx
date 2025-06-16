import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return new Response("No file uploaded", { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${uuidv4()}.mp3`;

    const outputDir = path.join(process.cwd(), "output");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    const outputPath = path.join(outputDir, fileName);
    fs.writeFileSync(outputPath, buffer);

    return new Response(
      JSON.stringify({ message: "Audio saved!", path: outputPath }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("❌ Error saving audio:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
