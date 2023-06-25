import { useForm} from "react-hook-form"
import { Link } from "react-router-dom";
import banner from '../../assets/image/Frame.png'


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data)
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:gap-32 lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold py-10">Login now!</h1>
          <img src={banner} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body pb-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input defaultValue="email" className="p-2 rounded-lg bg-slate-100" {...register("email", { required: true })} />
              {errors.email?.type === "required" && (<p role="alert" className="text-red-500 label-text-alt">email is required *</p>)}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" className="p-2 rounded-lg bg-slate-100" {...register("password", { required: true ,minLength :6})} />
              {errors.password?.type === "required" && (<p role="alert" className="text-red-500 label-text-alt">password is required *</p>)}
              {errors.password?.type === "minLength" && (<p role="alert" className="text-red-500 label-text-alt">password length must be 6 *</p>)}
              <label className="label">
                <Link to='/register' className="label-text-alt text-orange-500">
                  New here? go and register !
                </Link>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn font-bold normal-case bg-slate-300"  type="submit">Login</button>
            </div>
          </form>
          <div className="card-body pt-0">
            <button className="btn font-bold normal-case w-full bg-orange-200"  type="submit">Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
