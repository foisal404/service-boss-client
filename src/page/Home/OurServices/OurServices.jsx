import acREpairImg from "../../../assets/image/icon/acRepair.png";
import applianceREpairImg from "../../../assets/image/icon/appliancerepair.png";
import tripsImg from "../../../assets/image/icon/Trips&Travels.png";
import shiftImg from "../../../assets/image/icon/shift.png";
import beautyImg from "../../../assets/image/icon/Beauty.png";
import carcareImg from "../../../assets/image/icon/CarCareServices.png";
import ceanImg from "../../../assets/image/icon/clean.png";
import paintImg from "../../../assets/image/icon/paintwork.png";
import electricImg from "../../../assets/image/icon/Electric&Plumbing.png";
import carRentImg from "../../../assets/image/icon/car-rent.png";
import mensCareImg from "../../../assets/image/icon/salon.png";

const OurServices = () => {
  return (
    <div className="p-10 px-20">
      <h2 className="text-center text-4xl py-10 text-slate-600 font-bold my-5">
        Service We Provide
      </h2>
      <div className="flex justify-center flex-wrap gap-5">
        <div className="w-44">
          <img src={acREpairImg} className="w-20 mx-auto" alt="" />
          <h2 className="text-center">AC Repair Services</h2>
        </div>
        <div className="w-44">
          <img src={applianceREpairImg} className="w-20 mx-auto" alt="" />
          <h2 className="text-center">Appliance Repair</h2>
        </div>
        <div className="w-44">
          <img src={tripsImg} className="w-20 mx-auto" alt="" />
          <h2 className="text-center">Trips & Travels</h2>
        </div>
        <div className="w-44">
          <img src={shiftImg} className="w-20 mx-auto" alt="" />
          <h2 className="text-center">Shifting</h2>
        </div>
        <div className="w-44">
          <img src={beautyImg} className="w-20 mx-auto" alt="" />
          <h2 className="text-center">Beauty & Salon</h2>
        </div>
        <div className="w-44">
          <img src={carcareImg} className="w-20 mx-auto" alt="" />
          <h2 className="text-center">Car Care Services</h2>
        </div>
        <div className="w-44">
          <img src={ceanImg} className="w-20 mx-auto" alt="" />
          <h2 className="text-center">Cleaning & Pest Control</h2>
        </div>
        <div className="w-44">
          <img src={paintImg} className="w-20 mx-auto" alt="" />
          <h2 className="text-center">Painting & Renovation</h2>
        </div>
        <div className="w-44">
          <img src={electricImg} className="w-20 mx-auto" alt="" />
          <h2 className="text-center">Electric & Plumbing</h2>
        </div>
        <div className="w-44">
          <img src={carRentImg} className="w-20 mx-auto" alt="" />
          <h2 className="text-center">Car Rental</h2>
        </div>
        <div className="w-44">
          <img src={mensCareImg} className="w-20 mx-auto" alt="" />
          <h2 className="text-center">Men's Care & Salon</h2>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
