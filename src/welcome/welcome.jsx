import Carousel from "../components/Carousel";
import Catagory from "../components/Category";
import { homeCarousel } from "../Data/carousel";
export function Welcome() {
  return (
    <main>
      <Carousel carouselData={homeCarousel} />
      <Catagory title="RPG" />
      <Catagory title="Sci-Fi" />
      <Catagory title="Racing" />
      <Catagory title="Horror" />
      <Catagory title="Sports" />
      {/* <VideoSection /> */}
    </main>
  );
}
