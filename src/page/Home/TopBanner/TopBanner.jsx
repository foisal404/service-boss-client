import { Parallax } from "react-parallax";
import banner from "../../../assets/image/banner/banner.jpg";
import { Link } from "react-router-dom";

const TopBanner = () => {
  return (
    <div>
      <Parallax
        bgImage={`${banner}`}
        bgImageAlt="banner"
        // blur={{ min: -5, max: 15 }}
        strength={350}
      >
        <div
          className="hero min-h-[90vh]"
        //   style={{
        //     backgroundImage: `url(${banner})`,
        //   }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Welcome to{" "}
                <span className=" bg-green-500 rounded-lg">Service</span> HERO
              </h1>
              <p className="mb-5 text-slate-300">
                Where Service Meets Perfection!Introducing Service Hero, the
                industry leader in delivering exceptional service experiences.
              </p>
              <button  className="btn animate-bounce normal-case">
                <Link to='/allservies'>Explore Services</Link>
              </button>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default TopBanner;
