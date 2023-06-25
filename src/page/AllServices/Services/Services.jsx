import { useEffect, useState } from "react";
import ServiceCard from "../../../component/ServiceCard";


const Services = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
        console.log(data);
    },[])
    return (
        <div className="p-20">
            <h2 className="text-center text-4xl font-bold">All Services</h2>
            <div className="py-20 grid grid-cols-3">
                {
                    data.map(doc=><ServiceCard key={doc._id} data={doc} />)
                }
            </div>
        </div>
    );
};

export default Services;