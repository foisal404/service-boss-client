import { useLoaderData } from "react-router-dom";
import saftyImg from "../../../assets/image/icon/badge.png";
import ServiceIncludes from "./ServiceIncludes";
import useRole from "../../../hooks/useRole";
import { useContext } from "react";
import { authContext } from "../../../Auth/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useReview from "../../../hooks/useReview";

const DetailsService = () => {
  const [role] = useRole();
  const { user, loading } = useContext(authContext);
  console.log(role);
  const loader = useLoaderData();
  const {
    _id,
    category,
    title,
    subtitle,
    image,
    service_details,
    service_includes,
    price,
    unit,
  } = loader;
  // console.log(loader);
  const handleForm = (event) => {
    event.preventDefault();
    const from = event.target;
    const rating = from.rating.value;
    const comment = from.comment.value;
    const data = {
      serviceID: _id,
      userDP: user?.photoURL,
      userName: user?.displayName,
      comment,
      rating: parseFloat(rating),
    };
    console.log(data);
    fetch("http://localhost:5000/comment/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.insertedId) {
          toast("feedback added");
        } else {
          toast("added failed");
        }
        console.log(data);
      });
  };
  const [comments, refetch] = useReview(_id);
  console.log(comments);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-5 lg:items-start">
          <div>
            <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
            <button
              className={`btn w-full my-5 bg-green-500 text-white font-bold normal-case ${
                role?.role === "user" ? "" : "btn-disabled bg-gray-600"
              }`}
            >
              Proceed To Cart -{">"}
            </button>
          </div>

          <div>
            <div className="flex">
              <h1 className="text-5xl font-bold">{title}</h1>
            </div>
            <h2 className="text-4xl font-bold">{subtitle}</h2>
            <img src={saftyImg} className="h-10 my-3" alt="" />

            <button className="btn btn-outline btn-error btn-xs ">
              {category}
            </button>
            <p className="text-lg text-green-800 pt-5 font-semibold ">
              $ {price} / {unit}
            </p>
            <p className="py-6">{service_details}</p>
            <h2 className="text-2xl font-bold">Overview of {title}</h2>
            <ServiceIncludes data={service_includes}></ServiceIncludes>
            <div>
              <h2 className="font-bold text-2xl">Open Disscution</h2>
              <div
                className={`bg-slate-200 m-2 rounded-2xl ${
                  user ? "" : " hidden"
                }`}
              >
                {/* from ------------------------------------------------------- */}
                <form
                  className="card-body items-center flex-row "
                  onSubmit={handleForm}
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">rating</span>
                    </label>
                    <input
                      className="p-2 rounded-lg w-14 bg-slate-100"
                      type="text"
                      name="rating"
                      placeholder="5.0"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">comment</span>
                    </label>
                    <textarea
                      type="text"
                      className="p-2 w-96 h-10 flex-grow rounded-lg bg-slate-100"
                      name="comment"
                    />
                  </div>
                  <div className="form-control mt-2">
                    <button
                      className="btn font-bold normal-case bg-slate-300"
                      type="submit"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
              {/* Review  */}
              <h2 className="font-bold text-2xl">Reviews <div className="badge badge-secondary">+{comments.length}</div></h2>
              <div>
                {comments.map((com, idx) => (
                  <div className="flex p-2 my-5 gap-5 bg-slate-200 rounded-lg" key={idx}>
                    <img
                      src={com?.userDP}
                      className="h-20 w-20 rounded-full"
                      alt=""
                    />
                    <div>
                      <p className="text-lg font-semibold">{com?.userName}</p>
                      <p>{com?.rating}</p>
                      <p>{com?.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsService;
