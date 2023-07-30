import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import banner from "../../assets/image/Frame.png";
import { useContext, useState } from "react";
import { authContext } from "../../Auth/AuthProvider";
import { toast } from "react-toastify";
import useaddUser from "../../hooks/addUser";
import Swal from "sweetalert2";
const api_key= import.meta.env.VITE_IMAGE
const Register = () => {
  const [error, setErrror] = useState(false);
  const navigate=useNavigate();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${api_key}`
  const { updateUserProfile, singUp, googleLogin, setLoading } =
    useContext(authContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setErrror(false);
    console.log(data)
    const { name, email, photo, password } = data;
    const formData = new FormData();
    formData.append('image', data.photo[0])

    fetch(img_hosting_url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
        if(imgResponse.success){
          const imgURL = imgResponse.data?.display_url;
          const {name, email, password} = data;
          const newItem = {name,email, password, image:imgURL}
          console.log(newItem)
          if (data.confirm !== data.password  ) {
            setErrror(true);
            return;
          } else {
            singUp(email, password)
              .then((result) => {
                const currentUser = result.user;
                // console.log(currentUser);
                updateUserProfile(newItem?.image, name)
                  .then(() => {
                    console.log("profile update");
                    console.log(currentUser);
                    const data = {
                      username: currentUser.displayName,
                      useremail: currentUser.email,
                      userphoto: currentUser.photoURL,
                      role: "user",
                    };
                    if(currentUser){
                      fetch("http://localhost:5000/user", {
                      method: "POST",
                      headers: {
                        "content-type": "application/json",
                      },
                      body: JSON.stringify(data),
                      })
                      .then((res) => res.json())
                      .then((data) => {
                        // console.log(data);
                        Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "Succesfully Register",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                        navigate('/')
                      });
                    }
                  })
                  .catch((error) => {
                    setLoading(false);
                    console.error(error.message);
                    toast(`${error.message.slice(17)}`, { theme: "dark" });
                  });
              })
              .catch((error) => {
                console.error(error.message);
                toast(`${error.message.slice(17)}`, { theme: "dark" });
              });
          }
        }})
    
    
   
  };
  
  // console.log(api_key);
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const currentUser = result.user;
        // console.log(currentUser);
        const data = {
          username: currentUser.displayName,
          useremail: currentUser.email,
          userphoto: currentUser.photoURL,
          role: "user",
        };
        useaddUser(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(error.message);
        toast(`${error.message.slice(17)}`, { theme: "dark" });
      });
  };

  return (
    <div className="hero min-h-[90vh] bg-base-200">
      <div className="hero-content flex-col lg:gap-32 lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold py-10">Register now!</h1>
          <img src={banner} alt=""  className="w-96 "/>
        </div>
        <div className="card py-0 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body py-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                className="p-1 rounded-lg bg-slate-100"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p role="alert" className="text-red-500 label-text-alt">
                  Name is required *
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="p-1 rounded-lg bg-slate-100"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-500 label-text-alt">
                  email is required *
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                className=" file-input file-input-bordered  file-input-sm" type="file"
                {...register("photo", { required: true })}
              />
              {errors.photo?.type === "required" && (
                <p role="alert" className="text-red-500 label-text-alt">
                  Photo is required *
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="p-1 rounded-lg bg-slate-100"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <p role="alert" className="text-red-500 label-text-alt">
                  password is required *
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p role="alert" className="text-red-500 label-text-alt">
                  password length must be 6 *
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                className="p-1 rounded-lg bg-slate-100"
                {...register("confirm", { required: true })}
              />
              {errors.confirm?.type === "required" && (
                <p role="alert" className="text-red-500 label-text-alt">
                  confirm password is required *
                </p>
              )}
              {error && (
                <p role="alert" className="text-red-500 label-text-alt">
                  Confirm password should match *
                </p>
              )}

              <label className="label">
                <Link to="/login" className="label-text-alt text-orange-500">
                  Already have a account? go and login !
                </Link>
              </label>
            </div>
            <div className="form-control mt-2">
              <button
                className="btn font-bold normal-case bg-slate-300"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          <div className="card-body pt-0">
            <button
              className="btn font-bold normal-case w-full bg-orange-200"
              onClick={handleGoogle}
              type="submit"
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
