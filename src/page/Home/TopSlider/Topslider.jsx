import banner1 from "../../../assets/image/banner/banner1.jpg";
import banner2 from "../../../assets/image/banner/banner3.jpg";
import banner3 from "../../../assets/image/banner/banner.jpg";
import banner4 from "../../../assets/image/banner/banner4.webp";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Topslider = () => {
  return (
    <>
      <div className="text-center">
        <Carousel>
          <div className="w-full max-h-[80vh]">
            <img src={banner1} className="w-full" />
          </div>
          <div className="w-full max-h-[70vh]">
            <img src={banner2} />
          </div>
          <div className="w-full max-h-[70vh]">
            <img src={banner3} />
          </div>
          <div className="w-full max-h-[70vh]">
            <img src={banner4} />
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default Topslider;
