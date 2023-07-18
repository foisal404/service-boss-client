import React, { PureComponent, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ScaleChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/payments`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  let acSercvice = data.filter((ser) => ser.category === "AC Repair Services");
  let repairSercvice = data.filter(
    (ser) => ser.category === "Appliance Repair"
  );
  let tripSercvice = data.filter((ser) => ser.category === "Trips & Travels");
  let shiftSercvice = data.filter((ser) => ser.category === "Shifting");
  let beautySercvice = data.filter((ser) => ser.category === "Beauty & Salon");
  let carSercvice = data.filter((ser) => ser.category === "Car Care Services");
  let pestSercvice = data.filter(
    (ser) => ser.category === "Cleaning & Pest Control"
  );
  let paintingSercvice = data.filter(
    (ser) => ser.category === "Painting & Renovation"
  );
  let electricSercvice = data.filter(
    (ser) => ser.category === "Electric & Plumbing"
  );
  let rentSercvice = data.filter((ser) => ser.category === "Car Rental");
  let salonSercvice = data.filter(
    (ser) => ser.category === "Men's Care & Salon"
  );

  const newData = [
    {
      name: "AC Service",
      Payment: acSercvice?.length,
    },
    {
      name: "Repair",
      Payment: repairSercvice?.length,
    },
    {
      name: "trips",
      Payment: tripSercvice?.length,
    },
    {
      name: "shift",
      Payment: shiftSercvice?.length,
    },
    {
      name: "beauty",
      Payment: beautySercvice?.length,
    },
    {
      name: "car",
      Payment: carSercvice?.length,
    },

    {
      name: "pest",
      Payment: pestSercvice?.length,
    },

    {
      name: "painting",
      Payment: paintingSercvice?.length,
    },
    {
      name: "electric",
      Payment: electricSercvice?.length,
    },
    {
      name: "rent",
      Payment: rentSercvice?.length,
    },
    {
      name: "Salon",
      Payment: salonSercvice?.length,
    },
  ];
  // console.log(newData);
  // console.log(data.length);
  // const TotalPrice = data.map((dt) => parseFloat(dt.price));
  // console.log(TotalPrice);
  const total = data?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
 
  return (
    <div>
      <div className="w-11/12 px-3 mx-auto grid grid-cols-2 gap-5 my-8">
        <div className="flex gap-5 bg-green-300 p-10  text-lg text-slate-600 font-bold rounded-lg">
          <p>Total Paid</p>
          <p>${total.toFixed(2)}</p>
          </div>
        <div className="flex gap-5 bg-teal-400 p-10 text-lg text-slate-600 font-bold rounded-lg">
          <p>Payment Completed</p>
          <p>{data.length}</p>
        </div>
      </div>
      <ResponsiveContainer width="90%" height={400} className={"mx-auto"}>
        <BarChart width={500} height={300} data={newData}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Payment" fill="#4E8397"  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
