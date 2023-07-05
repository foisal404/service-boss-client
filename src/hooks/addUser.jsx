
import Swal from "sweetalert2";
const useaddUser = (data) => {
  fetch("https://service-boss-server.vercel.app/user", {
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
        position: 'top-end',
        icon: 'success',
        title: 'Succesfully Register',
        showConfirmButton: false,
        timer: 1500
      })
    });
};
export default useaddUser;
