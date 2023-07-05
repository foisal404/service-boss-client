import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Auth/AuthProvider";


const Mypayment = () => {
    const [data,setData]=useState([])
    const {user}=useContext(authContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/payments`)
        .then(res=>res.json())
        .then(data=>{
            const newdata=data.filter(doc=>doc.email===user?.email)
            console.log(data)
            setData(newdata)
        })
    },[user?.email])
    console.log(data)
    return (
        <div className="w-full min-h-screen p-5">
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

            {data.map((cartRow,idx) => (
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
                
                  
                <td>{cartRow?.transactionId}</td>
                <td>{cartRow?.price}</td>
                <td className={`${cartRow?.status === "unpaid"?"text-red-500":"text-green-500"}`}>{cartRow?.status}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
};

export default Mypayment;