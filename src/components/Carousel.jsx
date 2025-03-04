import React, { useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const Carousel = ({ carouselData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const index =
      currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const goToNext = () => {
    const index =
      currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="relative mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselData.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={item.urlToImage}
              alt={`Slide ${index + 1}`}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="text-center mt-3">
              <h5 className="text-lg text-gray-700">{item.Author}</h5>
              <h4 className="text-2xl text-yellow-500 font-bold">
                {item.title}
              </h4>
              <h5 className="text-sm text-gray-500">{item.category}</h5>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/3 left-3 transform p-2 bg-black text-white rounded-full hover:bg-gray-700 transition"
      >
        <LuChevronLeft size={50} />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/3 right-3 transform p-2 bg-black text-white rounded-full hover:bg-gray-700 transition"
      >
        <LuChevronRight size={50} />
      </button>
    </div>
  );
};

export default Carousel;
