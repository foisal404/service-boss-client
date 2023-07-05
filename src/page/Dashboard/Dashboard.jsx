
import { Link, Outlet } from "react-router-dom";
import useRole from "../../hooks/useRole";
import useUserCart from "../../hooks/useUserCart";

const Dashboard = () => {
  const [role]=useRole();
  const [cart]=useUserCart()
  console.log(role.role)
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet/>
          <label
            htmlFor="my-drawer-2"
            className="btn ms-0 drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-blue-200 text-base-content">
            {/* Sidebar content here */}
            {/* admin  */}
            <li>
                <Link to="" className="my-auto ">Profile
                </Link>
              </li>
            {role.role === "admin" && (<>
              <li>
                <Link to="allUser" className="my-auto">
                  All Users
                </Link>
              </li>
              <li>
                <Link to="manageservies" className="my-auto">
                  Manage Services
                </Link>
              </li>
              <li>
                <Link to="addservie" className="my-auto">
                  Add Service
                </Link>
              </li>
              
              <li>
                <Link to="transictions" className="my-auto">
                  Transictions
                </Link>
              </li>
              </>
            )}
            {/* user  */}
            {role.role === "user" && (<>
              <li>
                <Link to="usercart" className="my-auto">
                  MY Cart <div className="badge badge-success text-white">+{cart.length}</div>
                </Link>
              </li>
              <li>
                <Link to="mypayment" className="my-auto">
                  My Payment
                </Link>
              </li>
             
              </>
            )}
            <div className="divider"></div>
            <li>
              <Link to="/" className="my-auto">
                Home
              </Link>
            </li>
            <li>
              <Link to="/allservies" className="my-auto">
                All Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
