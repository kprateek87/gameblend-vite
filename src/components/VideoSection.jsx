import React, { useState } from "react";

const videos = [
  {
    id: "1",
    title: "Iconic Director And Proud Nerd Kevin Smith",
    duration: "10:43",
    thumbnail: "https://via.placeholder.com/150",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "Agatha All Along Star Sasheer Zamata",
    duration: "05:48",
    thumbnail: "https://via.placeholder.com/150",
    videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
  },
  {
    id: "3",
    title: "The Boys Star Karen Fukuhara on Kimiko’s Character Arc",
    duration: "05:19",
    thumbnail: "https://via.placeholder.com/150",
    videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
  {
    id: "4",
    title: "Kotaku’s Hopes For Spyro The Dragon’s Comeback",
    duration: "05:55",
    thumbnail: "https://via.placeholder.com/150",
    videoUrl: "https://www.youtube.com/embed/Bx7bX2QUw6A",
  },
];

const VideoSection = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="flex bg-gray-900 text-white p-4">
      <div className="w-2/3 relative">
        <iframe
          className="w-full h-96 rounded-lg"
          src={`${currentVideo.videoUrl}?autoplay=1&mute=1&rel=0`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <h2 className="mt-2 text-xl font-bold">{currentVideo.title}</h2>
      </div>

      <div className="w-1/3 bg-yellow-500 rounded-lg">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex items-center mb-1 cursor-pointer hover:bg-yellow-600 p-2 rounded-lg"
            onClick={() => setCurrentVideo(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-24 h-16 object-cover rounded-lg"
            />
            <div className="ml-3">
              <p className="text-sm font-bold">{video.title}</p>
              <p className="text-xs">{video.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
