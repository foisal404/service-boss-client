import icon1 from "../../../assets/image/icon/group.svg";
import icon3 from "../../../assets/image/icon/person.svg";
import icon4 from "../../../assets/image/icon/Wrench.svg";
import icon5 from "../../../assets/image/icon/check.svg";
import icon6 from "../../../assets/image/icon/deliveryt.svg";

const ChooseUsBanner = () => {
  return (
    <div className="p-32">
      <div className="text-center">
        <p className="text-orange-500 font-bold">Core Features</p>
        <h2 className="text-5xl font-extrabold">Why Choose Us</h2>
        <p className="py-5">
          Discover the Service Hero Difference: Unparalleled Expertise,
          Unwavering Commitment, <br /> and Unbeatable Satisfaction Guaranteed
        </p>
      </div>
      <div className="grid grid-cols-5 justify-items-center place-items-center">
        <div>
          <img src={icon1} className='mx-auto' alt="" />
          <p>Expert Team</p>
        </div>
        <div className="bg-[tomato] rounded-xl p-2">
          <img src={icon6} className='mx-auto' alt="" />
          <p>Expert Team</p>
        </div>
        <div>
          <img src={icon4} className='mx-auto' alt="" />
          <p>Maintanace</p>
        </div>
        <div>
          <img src={icon5} className='mx-auto' alt="" />
          <p>100% Guranty</p>
        </div>

        <div>
          <img src={icon3} className='mx-auto' alt="" />
          <p>24/7 Support</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsBanner;
