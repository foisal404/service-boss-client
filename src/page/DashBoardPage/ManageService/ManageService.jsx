import useServices from "../../../hooks/useServices";

const ManageService = () => {

  const [services, refetch] = useServices();
  return (
    <section className="p-5">
      <div>
        <h2 className="text-center text-4xl">Manage Services</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 p-5">
        {services.toReversed().map((service) => (
          <div className="" key={service._id}>
            <div className="hero bg-base-200 rounded-lg">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={service?.image}
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="flex flex-row justify-between w-full">
                  <div>
                    <h1 className="text-3xl font-bold">{service?.title}</h1>
                    <p className="py-6">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                  </div>
                  <div >
                    <button className="btn bg-green-400 my-1 w-full">Update</button>
                    <button className="btn bg-red-400 normal-case my-1 w-full">Delete</button>
                    <button className="btn bg-orange-400 my-1 w-full">Hide</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManageService;
