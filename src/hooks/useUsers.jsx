import { useContext } from "react";
import { authContext } from "../Auth/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const { user, loading } = useContext(authContext);
    // const token = localStorage.getItem('access-token');
    const { refetch,data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            return res.json();
        },
        
    })
    return [users,refetch]
};
export default useUsers;