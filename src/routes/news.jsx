import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../components/Carousel";

const API_KEY = "c2def06e6d184803ab2fa412b17d5e61";
const API_URL = `https://newsapi.org/v2/everything?q=gaming&apiKey=${API_KEY}`;

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(API_URL);
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    fetchNews();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Carousel carouselData={news.slice(1, 6)} />
      <h1 className="text-3xl font-bold mb-4 text-center">📰 Gaming News</h1>

      {news.length === 0 ? (
        <p>Loading news...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {news.slice(0, 6).map((article, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-lg bg-gray-800 text-white"
            >
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-lg font-bold mt-2">{article.title}</h3>
              <p className="text-gray-300">
                {article.source.name} -{" "}
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
              <p className="mt-2">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline mt-2 block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
