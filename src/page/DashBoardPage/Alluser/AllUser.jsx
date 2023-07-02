import { toast } from "react-toastify";
import useUsers from "../../../hooks/useUsers";

const AllUser = () => {
  const [users, refetch] = useUsers();
//   console.log(users);
  const handleMakeAdmin=(email)=>{
    console.log(email);
    fetch(`http://localhost:5000/user/admin/${email}`,{
        method:"PATCH"
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);
        if(data.modifiedCount>0){
            refetch();   
            toast("User is now admin", { theme: "dark" });
        }
    })
  }
  return (
    <div className="w-full p-10">
      <h2 className="flex justify-center">all user {users.length}</h2>
      <div className="overflow-x-auto p-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Name</th>
              <th>email</th>
              <th>role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                users.map((user,idx)=><tr key={idx}>
                    <th>
                      <label>
                        {idx+1}
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={user?.userphoto}
                              alt="Avatar User"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user?.username}</div>
                          <div className="text-sm opacity-50">{user?.role}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {user?.useremail}
                      <br />
                      
                    </td>
                    <td><span className="badge badge-ghost badge-sm">
                        {user?.role}
                      </span></td>
                    <th>
                      <button onClick={()=>handleMakeAdmin(user?.useremail)} className={`btn bg-[tomato] btn-xs normal-case ${user?.role === "admin" && "btn-disabled bg-slate-400" }`}>make Admin</button>
                    </th>
                  </tr>)
            }
            
            
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default AllUser;