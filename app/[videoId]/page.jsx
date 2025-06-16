import React from "react";

const VideoCapture = async ({ params }) => {
  const { videoId } = await params;
  return (
    <div>
      {videoId ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold mb-4">Video ID: {videoId}</h1>
          <p className="text-gray-600">
            This is the video capture page for video ID: {videoId}
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold mb-4">No Video ID Provided</h1>
          <p className="text-gray-600">
            Please provide a valid video ID in the URL.
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoCapture;
