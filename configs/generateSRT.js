// utils/generateSRT.js

export function toSRTTime(seconds) {
  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(Math.floor(seconds % 60)).padStart(2, "0");
  const ms = "000";
  return `${hours}:${minutes}:${secs},${ms}`;
}

export function generateSRT(script, durationPerSentence = 3) {
  const sentences = script
    .split(/(?<=[.?!])\s+/)
    .filter((s) => s.trim().length > 0);

  let currentStart = 0;
  let srt = "";

  sentences.forEach((sentence, index) => {
    const start = toSRTTime(currentStart);
    const end = toSRTTime(currentStart + durationPerSentence);

    srt += `${index + 1}\n${start} --> ${end}\n${sentence.trim()}\n\n`;
    currentStart += durationPerSentence;
  });

  return srt;
}
