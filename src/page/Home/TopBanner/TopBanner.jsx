import banner from "../../../assets/image/banner/banner.jpg";

const TopBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-[90vh]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to <span className=" bg-green-500 rounded-lg">Service</span> Boss
            </h1>
            <p className="mb-5 text-slate-300">
              Where Service Meets Perfection!Introducing Service Boss, the
              industry leader in delivering exceptional service experiences.
            </p>
            <button className="btn animate-bounce normal-case">Explore Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
