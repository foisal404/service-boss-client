import { useContext } from "react";
import TitleSection from "../../../component/Shared/TitleSection";
import useRole from "../../../hooks/useRole";
import useUsers from "../../../hooks/useUsers";
import { authContext } from "../../../Auth/AuthProvider";
import ScaleChart from "./ScaleChart";
// import { FaClone } from "react-icons/fa";

const Profile = () => {
  const [role] = useRole();
  const {user}=useContext(authContext)
  const [users, refetch] = useUsers();
  const profilUser= users.find(use=>use.useremail=== user.email)
  console.log(profilUser)
  // console.log(user)
  // const handleAddress=(event)=>{
  //   event.preventDefault();
  //   const details=event.target.address.value;
  //   const address=  {add : details};
  //   // console.log(address)
    
  //     fetch(`http://localhost:5000/user/setaddress/${profilUser?.useremail}`,{
  //       method: "PATCH",
  //       headers:{
  //         "content-type":"appliction/json"
  //       },
  //       body: JSON.stringify(address)
  //     })
  //   console.log(JSON.stringify(address))
  // }
  
  return (
    <div className="w-full min-h-screen">
      <TitleSection title={`${role.role} profile`} />
      {
         role.role==="admin"&& <>
         <ScaleChart/>
         </>
         
     }
      <div className="p-10">
        <div className="hero w-full">
          <div className="hero-content w-full flex-col lg:flex-row-reverse">
            <img
              src={profilUser?.userphoto}
              className="max-w-sm rounded-lg shadow-2xl max-h-96"
              alt={`${profilUser?.username} Photo`}
            />
            <div className="w-1/2">
              <h1 className="text-4xl text-slate-600 font-bold">{profilUser?.username} <span className="badge badge-accent text-white">{profilUser?.role}</span></h1>
              <p className="py-6">
                {profilUser?.useremail}
              </p>
              {/* <div>
                {role.role==="user" && 
                <form onSubmit={handleAddress}> <input type="text" name="address" placeholder="address"/> <button type="submit"><FaClone/></button> </form>
                }
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
