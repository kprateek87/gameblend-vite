import React from "react";
import VideosComponent from "../components/VideosComponent";
import { allGames } from "../Data/Games";

function Videos() {
  console.log();

  return (
    <>
      <div>All Videos</div>
      <VideosComponent videoIds={allGames.map((e) => e.videos[0])} />
    </>
  );
}

export default Videos;
