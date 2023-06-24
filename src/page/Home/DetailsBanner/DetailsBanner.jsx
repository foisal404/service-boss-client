import icon1 from "../../../assets/image/icon/ico1.webp";
import icon2 from "../../../assets/image/icon/ico2.webp";
import icon3 from "../../../assets/image/icon/ico3.webp";
import icon4 from "../../../assets/image/icon/ico4.png";
const DetailsBanner = () => {
  return (
    <div className="hero py-12 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="lg:w-1/2">
          <img src={icon4} className="max-w-sm rounded-lg shadow-2xl mx-auto" />
          <div className="p-10">
            <p className="text-xl text-center">100% Quality Assured</p>
            <p className="text-xs text-center">
              If you don’t love our service, we will make it right.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">Why HERO Service !</h1>
          <div className="flex py-5">
            <img src={icon1} className="w-20 h-20" alt="" />
            <div>
              <h2 className="font-bold">Transparent Price</h2>
              <p>See fixed prices before you book. No hidden charges.</p>
            </div>
          </div>
          <div className="flex py-5">
            <img src={icon2} className="w-20 h-20" alt="" />
            <div>
              <h2 className="font-bold">Transparent Price</h2>
              <p>See fixed prices before you book. No hidden charges.</p>
            </div>
          </div>
          <div className="flex py-5">
            <img src={icon3} className="w-20 h-20" alt="" />
            <div>
              <h2 className="font-bold ">Transparent Price</h2>
              <p>See fixed prices before you book. No hidden charges.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBanner;
