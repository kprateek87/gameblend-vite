import { useParams } from "react-router";
import { allGames } from "../../Data/Games";

function Platform() {
  const loaderData = useParams();
  const games = allGames.filter((game) =>
    game.platforms.join(" ").includes(loaderData.platformName)
  );
  return (
    <div className="px-5">
      <div className="text-xl">{loaderData.platformName} Games</div>
      <div className="md:flex flex-wrap gap-5 items-start justify-center">
        {games.map((item, index) => (
          <div key={index} className="p-5 basis-1/5">
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

export default Platform;
