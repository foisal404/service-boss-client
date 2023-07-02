import { useLoaderData } from "react-router-dom";
import { FaBookmark, FaStar } from "react-icons/fa";
import saftyImg from '../../../assets/image/icon/badge.png'
import ServiceIncludes from "./ServiceIncludes";

const DetailsService = () => {
  const loader = useLoaderData();
  const {
    _id,
    category,
    title,
    subtitle,
    image,
    service_details,
    ratings,
    service_includes,
    price,
    unit
  } = loader;
  console.log(loader);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-5 lg:items-start">
          
          <div>
            <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
            <button className="btn w-full my-5 bg-green-500 text-white font-bold normal-case">Proceed To Checkout -{'>'}</button>
          </div>
          
          <div>
            <div className="flex">
              <h1 className="text-5xl font-bold">{title}</h1>
              <button className="btn mx-10 text-xl">
                <FaBookmark /> Add to Cart
              </button>
            </div>
            <h2 className="text-4xl font-bold">{subtitle}</h2>
            <img src={saftyImg} className="h-10 my-3" alt="" />
            <p className="bg-[#209E61] w-40 rounded-md ps-2 items-center text-lg text-slate-50 flex my-3"><FaStar/> {ratings} out of 5</p>
            <button className="btn btn-outline btn-error btn-xs ">{category}</button>
            <p className="text-lg text-green-800 pt-5 font-semibold ">$ {price} / {unit}</p>
            <p className="py-6">
             {service_details}
            </p>
            <h2 className="text-2xl font-bold">Overview of {title}</h2>
            <ServiceIncludes data={service_includes}></ServiceIncludes>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsService;
