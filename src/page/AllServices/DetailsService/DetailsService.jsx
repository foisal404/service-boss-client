import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsService = () => {
    const pathid=useParams();
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("services.json")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])
    console.log(data);
    return (
        <div>
            <p>hello{pathid.id}</p>
        </div>
    );
};

export default DetailsService;