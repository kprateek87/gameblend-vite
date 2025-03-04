import { FaLink } from "react-icons/fa";
import { allGames } from "../../Data/Games";
import * as icons from "react-icons/si";
import { GrSystem } from "react-icons/gr";
import Category from "../../components/Category";
import VideosComponent from "../../components/VideosComponent";
import { useParams } from "react-router";
export default function Game() {
  let loaderData = useParams();
  const game = allGames.filter((game) =>
    game.gamePage.includes(loaderData.gamepath)
  );

  return (
    <>
      {game.map((item, index) => (
        <div key={index} className="">
          <div className="md:flex justify-center items-center gap-5 px-10">
            <div className="md:w-1/2 w-full">
              <img src={item.image} alt={item.title} className="w-xs mx-auto" />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-extrabold py-5">{item.title}</h1>
              </div>
              <p>{item.description}</p>
              <div className="p-6 rounded-lg shadow-lg w-full max-w-3xl">
                <div className="grid grid-cols-2 gap-4 border-b border-gray-600 pb-4">
                  <div>
                    <h3 className="font-bold">Genres</h3>
                    <p>{item.Genres.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Developers</h3>
                    <p>{item.Developers}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b border-gray-600 py-4">
                  <div>
                    <h3 className="font-bold">Release Date</h3>
                    <p>{item.ReleaseDate}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Publishers</h3>
                    <p>{item.Publishers}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-b border-gray-600 py-4">
                  <div>
                    <h3 className="font-bold">Content Rating</h3>
                    <p>{item.ContentRating.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Franchises</h3>
                    <p>{item.Franchises.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 px-10 py-5">
            <h2 className="font-bold text-2xl">Story Line Of The Game</h2>
            <p>{item.storyLine}</p>
            <div className="flex items-center gap-2 text-2xl font-bold border-gray-600 border-b py-3">
              <FaLink /> Community
            </div>
            <div className="flex gap-5 flex-wrap py-5">
              {item.community.map((link, index) => {
                const IconComponent = icons[`Si${link.appName}`] || FaLink;
                return (
                  <a
                    href={link.directLink}
                    key={index}
                    className="flex gap-2 items-center basis-1/6 text-white"
                  >
                    <IconComponent className="size-10" /> {link.appName}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="bg-gray-900 px-10">
            <div className="flex items-center gap-2 text-2xl font-bold border-gray-600 border-b py-3">
              <GrSystem /> Recommanded System Requirement
            </div>
            <ul className="py-5">
              <li>{item.systemRequirement.CPU}</li>
              <li>{item.systemRequirement.GPU}</li>
              <li>{item.systemRequirement.Memory}</li>
              <li>{item.systemRequirement.DirectX}</li>
              <li>{item.systemRequirement.OS}</li>
              <li>{item.systemRequirement.Storage}</li>
            </ul>
          </div>
          <VideosComponent videoIds={item.videos} />
          <Category title={item.category} subtitle="More Category Games : " />
        </div>
      ))}
    </>
  );
}
