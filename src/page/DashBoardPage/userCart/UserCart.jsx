
import { Link } from "react-router-dom";
import useUserCart from "../../../hooks/useUserCart";
import { toast } from "react-toastify";

const UserCart = () => {
  const [cart,refetch] = useUserCart();
  // console.log(cart);
  const handleDeleteCart=(id)=>{
    // console.log(id);
    fetch(`http://localhost:5000/cart/delete/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      refetch()
      if(data.deletedCount){
        toast("delete sucessfully")
      }
      else{
        toast("delete Failed")
      }
      console.log(data);
    })

  }
  return (
    <div className=" w-full min-h-full p-5">
      {cart.length}
      <div className="overflow-x-auto w-full ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Details</th>
              <th>service ID</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
{/* serviceimage servicetitle status useremail */}

            {cart.map((cartRow,idx) => (
              <tr key={idx}>
                <th>
                  {idx+1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cartRow?.serviceimage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{cartRow?.servicetitle}</div>
                    </div>
                  </div>
                </td>
                
                  
                <td>{cartRow?.serviceID}</td>
                <td>{cartRow?.price}</td>
                <td className={`${cartRow?.status === "unpaid"?"text-red-500":"text-green-500"}`}>{cartRow?.status}</td>
                <th>
                  <button  className="btn bg-green-400 btn-xs"><Link to={`payment/${cartRow?._id}`}>Pay</Link></button>
                  <button onClick={()=>handleDeleteCart(cartRow?._id)}  className="btn bg-green-400 btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCart;
