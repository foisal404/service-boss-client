import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../Auth/AuthProvider";

const useUserCart = () => {
    const { user, loading } = useContext(authContext);
    const { refetch,data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart/${user?.email}`)
            return res.json();
        },
        
    })
    return [cart,refetch]
};

export default useUserCart;