import { useQuery } from "@tanstack/react-query";

const useServices=()=>{
    const {refetch, data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch(`https://service-boss-server.vercel.app/services`)
            return res.json();
        },
        
    })

    return [services, refetch]

}
export default useServices;