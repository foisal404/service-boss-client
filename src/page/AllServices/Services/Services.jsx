
import ServiceCard from "../../../component/ServiceCard";
import useServices from "../../../hooks/useServices";


const Services = () => {
    
    const [services]=useServices();
    console.log(services);
    return (
        <div className="p-20">
            <h2 className="text-center text-4xl font-bold">All Services</h2>
            <div className="py-20 grid grid-cols-3">
                {
                    services.map(doc=><ServiceCard key={doc._id} data={doc} />)
                }
            </div>
        </div>
    );
};

export default Services;