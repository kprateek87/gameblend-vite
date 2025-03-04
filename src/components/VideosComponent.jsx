import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa6";
import { youtubeapi } from "../Data/youtubeapi";

const VideosComponent = ({ videoIds }) => {
  const videos = youtubeapi(videoIds);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {videos.map((video) => (
        <div key={video.id} className="p-4 rounded-lg shadow-lg">
          <a href={`https://www.youtube.com/embed/${video.id}`}>
            <img
              className="w-full rounded-md mb-2"
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            />
            {/* <iframe className="w-full h-64 rounded-lg src={`https://www.youtube.com/embed/${video.id}`} title={video.snippet.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            <h2 className="text-lg font-bold">{video.snippet.title}</h2>
          </a>
          <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
            <FaHeart />
            {video.statistics.likeCount}
          </p>

          {/* statistics: 
          commentCount: "4197"
          favoriteCount: "0"
          likeCount: "78768"
          viewCount: "3012024" */}
        </div>
      ))}
    </div>
  );
};

export default VideosComponent;
