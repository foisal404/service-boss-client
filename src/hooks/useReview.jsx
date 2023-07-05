import { useQuery } from "@tanstack/react-query";

const useReview=(serviceID)=>{
    const {refetch, data: comments = [] } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await fetch(`https://service-boss-server.vercel.app/comments/${serviceID}`)
            return res.json();
        },
        
    })

    return [comments, refetch]

}
export default useReview;