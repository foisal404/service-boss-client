import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../Auth/AuthProvider";

const useMyPayment=()=>{
    const { user, loading } = useContext(authContext);
    const {refetch, data: paymentServices = [] } = useQuery({
        queryKey: ['payment', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/payments`)
            return res.json();
        },
        
    })

    return [paymentServices, refetch]

}
export default useMyPayment;