import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
    const {_id,title,image,service_details}=data;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="image"
            className="h-64"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-sm text-gray-500">{service_details}</p>
          <div className="card-actions ">
            <button className="btn w-full"> <Link to={`/allservies/${_id}`}>details</Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
