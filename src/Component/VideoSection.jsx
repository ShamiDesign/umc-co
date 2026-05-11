import React from "react";

const VideoSection = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/tUUfzrP-6ag"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;