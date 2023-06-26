import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Auth/AuthProvider";
import { toast } from "react-toastify";

const NavHead = () => {
  const { user, logOut } = useContext(authContext);
  console.log(user);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.info('Logout Succesfully',{theme: "dark"})
      })
      .catch((error) => {
        console.error(error.message);
        toast(`${error.message.slice(17)}`,{theme: "dark"})
      });
  };
  const navItems = (
    <>
      <li>
        <Link to="/allservies" className="my-auto">All Services</Link>
      </li>
      {user ? (
        <>
          <span className="mx-3 my-0">
            <label tabIndex={0} className="btn   btn-circle avatar tooltip  tooltip-bottom" data-tip={`${user.displayName}`}>
              <div className="w-10  rounded-full mx-auto mt-1 ">
                <img src={`${user.photoURL}`} />
              </div>
            </label>
          </span>
          <button
            onClick={handleLogout}
            className="btn btn-sm my-auto mx-5 normal-case"
          >
            Logout
          </button>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar lg:px-32 bg-base-100 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          serVice
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 py-0">{navItems}</ul>
      </div>
    </div>
  );
};

export default NavHead;
