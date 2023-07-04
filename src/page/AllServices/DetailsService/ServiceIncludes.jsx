
const ServiceIncludes = ({data}) => {
    // console.log(data);
    return (
        <div>
            
            <h2 className="text-xl font-bold">Whats Included?</h2>
            {data["whats_included"].map((service,idx)=><li key={idx}>{service}</li>)}
            <h2 className="text-xl font-bold">Whats Excluded?</h2>
            {data["whats_excluded"].map((service,idx)=><li key={idx}>{service}</li>)}
            <h2  className="text-xl font-bold">Available Services</h2>
            {data["available_services"].map((service,idx)=><li key={idx}>{service}</li>)}
        </div>
    );
};

export default ServiceIncludes;