import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Auth/AuthProvider";
import TitleSection from "../../../component/Shared/TitleSection";

const Mypayment = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(authContext);
  useEffect(() => {
    fetch(`https://service-boss-server.vercel.app/payments`)
      .then((res) => res.json())
      .then((data) => {
        const newdata = data.filter((doc) => doc.email === user?.email);
        console.log(data);
        setData(newdata);
      });
  }, [user?.email]);
  console.log(data);
  return (
    <div className="w-full min-h-screen p-5">
      <TitleSection title='My Payment History' />
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Details</th>
            <th>Transaction ID</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((cartRow, idx) => (
            <tr key={idx}>
              <th>{idx + 1}</th>
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
                    <div className="text-2xl font-bold">
                      {cartRow?.servicetitle}
                    </div>
                    <div className="text-sm opacity-50">{cartRow?.date}</div>
                  </div>
                </div>
              </td>

              <td>{cartRow?.transactionId}</td>
              <td>$ {cartRow?.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mypayment;
