import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import TitleSection from "../../../component/Shared/TitleSection";


const UpdateService = () => {
    const loader=useLoaderData()
    // console.log(loader);
    const {
        _id,
        category,
        image,
        price,
        service_details,
        subtitle,
        title,
        unit,
        service_includes} =loader;
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        
            console.log(data);
            fetch(`https://service-boss-server.vercel.app/service/update/${_id}`,{
                method:"PATCH",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
                if(data.modifiedCount> 0){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Succesfully Service updated',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                else{
                  toast("Failed to update")
                }
            })
      }
    return (
        <section className="w-full px-20 p-10">
      <div>
        {/* <h2 className="text-center text-4xl">Update Service</h2> */}
        <TitleSection title='Update Service' />
      </div>
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form className="card-body pb-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">title</span>
                </label>
                <input
                  className="p-2 rounded-lg  bg-slate-100" defaultValue={title}
                  {...register("title", { required: true })}
                />
                {errors.title?.type === "required" && (
                  <p role="alert" className="text-red-500 label-text-alt">
                    Title is required *
                  </p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">subtitle</span>
                </label>
                <input
                  className="p-2 rounded-lg bg-slate-100" defaultValue={subtitle}
                  {...register("subtitle", { required: true })}
                />
                {errors.subtitle?.type === "required" && (
                  <p role="alert" className="text-red-500 label-text-alt">
                    subtitle is required *
                  </p>
                )}
              </div>
            </div>
            <div className="flex w-full gap-5">
              <div className="form-control w-full">
                <label>
                  <span className="label-text">category</span>
                </label>
                <select
                  className="p-2 my-3 rounded-lg bg-slate-100"
                  {...register("category")} defaultValue={category}
                >
                  <option value="AC Repair Services">AC Repair Services</option>
                  <option value="Appliance Repair">Appliance Repair</option>
                  <option value="Trips & Travels">Trips & Travels</option>
                  <option value="Shifting">Shifting</option>
                  <option value="Beauty & Salon">Beauty & Salon</option>
                  <option value="Car Care Services">Car Care Services</option>
                  <option value="Cleaning & Pest Control">
                    Cleaning & Pest Control
                  </option>
                  <option value="Painting & Renovation">
                    Painting & Renovation
                  </option>
                  <option value="Electric & Plumbing">
                    Electric & Plumbing
                  </option>
                  <option value="Car Rental">Car Rental</option>
                  <option value="Men's Care & Salon">Men's Care & Salon</option>
                </select>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">$ Price</span>
                </label>
                <input
                  className="p-2 rounded-lg bg-slate-100"
                  {...register("price", { required: true })} defaultValue={price}
                />
                {errors.price?.type === "required" && (
                  <p role="alert" className="text-red-500 label-text-alt">
                    price is required *
                  </p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Unit per</span>
                </label>
                <input
                  className="p-2 rounded-lg bg-slate-100"
                  {...register("unit", { required: true })} defaultValue={unit}
                />
                {errors.unit?.type === "required" && (
                  <p role="alert" className="text-red-500 label-text-alt">
                    unit is required *
                  </p>
                )}
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Service image</span>
              </label>
              <input
                className="p-2 rounded-lg bg-slate-100"
                {...register("image", { required: true })} defaultValue={image}
              />
              {errors.image?.type === "required" && (
                <p role="alert" className="text-red-500 label-text-alt">
                  image is required *
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">service details</span>
              </label>
              <input
                className="p-2 rounded-lg bg-slate-100"
                {...register("service_details", { required: true })} defaultValue={service_details}
              />
              {errors.service_details?.type === "required" && (
                <p role="alert" className="text-red-500 label-text-alt">
                  service details is required *
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Whats Included</span>
              </label>
              <div className="flex gap-5">
                <input
                  className="p-2 rounded-lg bg-slate-100"
                  {...register("incluide1", { required: true })}  defaultValue={service_includes?.["whats_included"][0]}
                />
                <input
                  className="p-2 rounded-lg bg-slate-100"
                  {...register("incluide2", { required: true })} defaultValue={service_includes?.["whats_included"][1]}
                />
                <input
                  className="p-2 rounded-lg bg-slate-100"
                  {...register("incluide3", { required: true })} defaultValue={service_includes?.["whats_included"][2]}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">whats excluded</span>
              </label>
              <div className="flex gap-5">
                <input
                  className="p-2 rounded-lg bg-slate-100"
                  {...register("excluide1", { required: true })} defaultValue={service_includes?.["whats_excluded"][0]}
                />
                <input
                  className="p-2 rounded-lg bg-slate-100"
                  {...register("excluide2", { required: true })} defaultValue={service_includes?.["whats_excluded"][1]}
                />
                <input
                  className="p-2 rounded-lg bg-slate-100"
                  {...register("excluide3", { required: true })}  defaultValue={service_includes?.["whats_excluded"][2]}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">available services</span>
              </label>
              <div className="flex gap-5">
                <input
                  className="p-2 rounded-lg bg-slate-100"
                  {...register("available1", { required: true })} defaultValue={service_includes?.["available_services"][0]}
                />
                <input
                  className="p-2 rounded-lg bg-slate-100"
                  {...register("available2", { required: true })} defaultValue={service_includes?.["available_services"][1]}
                />
                <input
                  className="p-2 rounded-lg bg-slate-100"
                  {...register("available3", { required: true })} defaultValue={service_includes?.["available_services"][2]}
                />
              </div>
            </div>

            <div className="form-control mt-2">
              <button
                className="btn font-bold normal-case bg-blue-400 text-white"
                type="submit"
              >
                Update Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    );
};

export default UpdateService;