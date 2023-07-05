import { useContext } from "react";
import { authContext } from "../Auth/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
    const { user, loading } = useContext(authContext);
    // const token = localStorage.getItem('access-token');
    const { data: role = [] } = useQuery({
        queryKey: ['user', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://service-boss-server.vercel.app/user/role/${user?.email}`)
            return res.json();
        },
        
    })
    return [role]
};

export default useRole;