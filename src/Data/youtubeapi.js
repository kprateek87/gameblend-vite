import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "AIzaSyA94GlRiabI4Vt6-dOV8cJWb7znDVV8L1U";

export const youtubeapi = (videoIds) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`,
          {
            params: {
              part: "snippet,statistics,contentDetails",
              id: videoIds.join(","),
              key: API_KEY,
            },
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);
  return videos;
};
