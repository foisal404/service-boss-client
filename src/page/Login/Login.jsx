import { useForm} from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import banner from '../../assets/image/Frame.png'
import { useContext } from "react";
import { authContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useaddUser from "../../hooks/addUser";
import { FcGoogle, FcKey } from "react-icons/fc";


const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const {SignIn,googleLogin}=useContext(authContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        // console.log(data)
        const {email,password}=data;
        SignIn(email,password)
        .then(result=>{
          const currentUser=result.user;
          console.log(currentUser);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Succesfully Login',
            showConfirmButton: false,
            timer: 1500
          })
          navigate(from, { replace: true });
        })
        .catch(error=>{
          console.error(error.message);
          toast(`${error.message.slice(17)}`,{theme: "dark"})
        })
      }
      const handleGoogle=()=>{
        googleLogin()
        .then(result=>{
            const currentUser=result.user;
            // console.log(currentUser);
            const data={username: currentUser.displayName, useremail: currentUser.email,userphoto:currentUser.photoURL, role:"user"}
            useaddUser(data)
        })
        .catch(error=>{
          console.error(error.message);
          toast(`${error.message.slice(17)}`,{theme: "dark"})
        })
      }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:gap-32 lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold py-10">Login now!</h1>
          <img src={banner} alt="banner" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body pb-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input placeholder="Email" className="p-2 rounded-lg bg-slate-100" {...register("email", { required: true })} />
              {errors.email?.type === "required" && (<p role="alert" className="text-red-500 label-text-alt">email is required *</p>)}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Password" className="p-2 rounded-lg bg-slate-100" {...register("password", { required: true ,minLength :6})} />
              {errors.password?.type === "required" && (<p role="alert" className="text-red-500 label-text-alt">password is required *</p>)}
              {errors.password?.type === "minLength" && (<p role="alert" className="text-red-500 label-text-alt">password length must be 6 *</p>)}
              <label className="label">
                <Link to='/register' className="label-text-alt text-orange-500">
                  New here? go and register !
                </Link>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn font-bold normal-case bg-slate-300"  type="submit"><FcKey className="text-xl" />Login</button>
            </div>
          </form>
          <div className="card-body pt-0">
            <button className="btn font-bold normal-case w-full bg-orange-200"  onClick={handleGoogle}><FcGoogle className="text-xl"/>Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
