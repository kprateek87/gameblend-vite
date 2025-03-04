import { allGames } from "../Data/Games";

export default function Games() {
  return (
    <div className="px-5">
      <div className="text-xl">All Games</div>
      <div className="md:flex flex-wrap gap-5 items-start justify-center">
        {allGames.map((item, index) => (
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
