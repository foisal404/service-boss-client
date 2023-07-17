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
  //   console.log(data);
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
  //   const newDate = data.map((dt) => parseFloat(dt.date.slice(8, 10)));
  //   console.log(newDate);
  const newData = [
    {
      name: "acSercvice",
      Sale_Rate: acSercvice?.length,
    },
    {
      name: "repair",
      Sale_Rate: repairSercvice?.length,
    },
    {
      name: "trips",
      Sale_Rate: tripSercvice?.length,
    },
    {
      name: "shift",
      Sale_Rate: shiftSercvice?.length,
    },
    {
      name: "beauty",
      Sale_Rate: beautySercvice?.length,
    },
    {
      name: "car",
      Sale_Rate: carSercvice?.length,
    },

    {
      name: "pest",
      Sale_Rate: pestSercvice?.length,
    },

    {
      name: "painting",
      Sale_Rate: paintingSercvice?.length,
    },
    {
      name: "electric",
      Sale_Rate: electricSercvice?.length,
    },
    {
      name: "rent",
      Sale_Rate: rentSercvice?.length,
    },
    {
      name: "salon",
      Sale_Rate: salonSercvice?.length,
    },
  ];
  //   console.log(newData);

  return (
    <div>
      <ResponsiveContainer width="90%" height={400} className={"mx-auto"} >
        <BarChart width={500} height={300} data={newData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Sale_Rate" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
