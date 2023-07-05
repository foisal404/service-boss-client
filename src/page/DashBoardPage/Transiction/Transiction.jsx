import { useEffect, useState } from "react";
import TitleSection from "../../../component/Shared/TitleSection";

const Transiction = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/payments`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data)

  return (
    <div className="min-h-full w-full">
      <TitleSection title="All Transictions" />
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Details</th>
            <th>Transiction ID</th>
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

export default Transiction;
