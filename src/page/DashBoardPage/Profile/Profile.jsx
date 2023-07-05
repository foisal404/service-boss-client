import { useContext } from "react";
import TitleSection from "../../../component/Shared/TitleSection";
import useRole from "../../../hooks/useRole";
import useUsers from "../../../hooks/useUsers";
import { authContext } from "../../../Auth/AuthProvider";

const Profile = () => {
  const [role] = useRole();
  const {user}=useContext(authContext)
  const [users, refetch] = useUsers();
  const profilUser= users.find(use=>use.useremail=== user.email)
  console.log(profilUser)
  return (
    <div className="w-full min-h-screen">
      <TitleSection title={`${role.role} profile`} />
      <div className="p-10">
        <div className="hero w-full">
          <div className="hero-content w-full flex-col lg:flex-row-reverse">
            <img
              src={profilUser?.userphoto}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="w-1/2">
              <h1 className="text-4xl text-slate-600 font-bold">{profilUser?.username} <span className="badge badge-accent text-white">{profilUser?.role}</span></h1>
              <p className="py-6">
                {profilUser?.useremail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
