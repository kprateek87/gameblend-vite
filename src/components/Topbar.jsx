import React from "react";
import { topBar } from "../Data/navbar";

function Topbar() {
  return (
    <div className="px-10 py-2 flex justify-center text-xs gap-3">
      {topBar.map((e, index) => (
        <div key={index}>
          <a href={e.link}>{e.title}</a>
        </div>
      ))}
    </div>
  );
}

export default Topbar;
