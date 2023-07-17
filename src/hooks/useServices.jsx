import { useQuery } from "@tanstack/react-query";

const useServices=()=>{
    const {refetch, data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/services`)
            return res.json();
        },
        
    })

    return [services, refetch]

}
export default useServices;