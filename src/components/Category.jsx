import React from "react";
import { allGames } from "../Data/Games";

function Category({ title,subtitle=" " }) {
  return (
    <div className="p-5">
      <div className="text-xl">{subtitle} {title}</div>
      <div className="md:flex gap-5 items-start">
        {allGames
          .filter((e) => title == e.category)
          .map((item, index) => (
            <div key={index} className="p-5">
              <a href={item.gamePage}>
                <img src={item.image} className="w-sm" />
                <h4 className="text-yellow-500 font-bold py-2 capitalize">
                  {item.title}
                </h4>
              </a>
              <p className="capitalize">{item.company}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Category;
