import { useState } from "react";
import { allGames } from "../Data/Games";
import { Link } from "react-router";

export default function Deals() {
  const limitedTimeDeals = allGames.slice(0, 6);
  const promoCodes = [
    { code: "SAVE10", discount: "10% OFF" },
    { code: "GAMER20", discount: "20% OFF Selected Titles" },
    { code: "FREESHIP", discount: "Free Shipping on Orders Over $50" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-blue-600 text-white text-center p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-bold">
          🔥 Special Gaming Deals This Week!
        </h2>
        <p>Limited-time offers on top-rated games. Don't miss out!</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">⏳ Limited-Time Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {limitedTimeDeals.map((game, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-lg bg-gray-800 text-white"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">{game.title}</h3>
            <p className="text-gray-300">{game.company}</p>
            <Link
              to={game.gamePage}
              className="text-blue-400 underline mt-2 block"
            >
              View Deal
            </Link>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8">🎟️ Extra Discount Promo Codes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {promoCodes.map((promo, index) => (
          <div
            key={index}
            className="bg-yellow-500 text-black p-4 rounded-lg text-center font-bold"
          >
            <p>{promo.discount}</p>
            <p className="text-xl">{promo.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
