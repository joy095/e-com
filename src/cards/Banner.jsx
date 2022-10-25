import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Img1 from "../img/img1.jpg";
import Img2 from "../img/img2.jpg";
import Img4 from "../img/img4.jpeg";

function Banner() {
  return (
    <div className="relative mb-2">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoFocus
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img className="cards" loading="lazy" src={Img1} alt="" />
        </div>

        <div>
          <img className="cards" loading="lazy" src={Img2} alt="" />
        </div>

        <div>
          <img className="cards" loading="lazy" src={Img4} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
