import Swal from "sweetalert2";
import useServices from "../../../hooks/useServices";
import { Link } from "react-router-dom";
import TitleSection from "../../../component/Shared/TitleSection";
import { FaEdit, FaTrash } from 'react-icons/fa';

const ManageService = () => {

  const [services, refetch] = useServices();
  // console.log(services)
  const handleDelete=(id)=>{
    console.log(id);
    fetch(`http://localhost:5000/service/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount> 0){
        console.log(data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Succesfully DELETE',
          showConfirmButton: false,
          timer: 1500
        })
        refetch();
      }
    })
  }
  return (
    <section className="p-5">
      <div>
        {/* <h2 className="text-center text-4xl">Manage Services</h2> */}
        <TitleSection title='Manage Services' />
      </div>
      <div className="grid grid-cols-1 gap-5 p-5">
        {services.toReversed().map((service) => (
          <div className="" key={service?._id}>
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
                    <p className="text-lg text-green-400">$ {service?.price}</p>
                  </div>
                  <div >
                    <button className="btn bg-green-500 normal-case my-1 w-full text-white"><FaEdit/><Link to={`${service?._id}`}>  Edit</Link></button>
                    <button onClick={()=>handleDelete(service?._id)} className="btn bg-red-400 normal-case my-1 w-full text-white">
                      <FaTrash/>Delete</button>
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
