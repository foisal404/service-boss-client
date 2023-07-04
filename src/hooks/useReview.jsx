import { useQuery } from "@tanstack/react-query";

const useReview=(serviceID)=>{
    const {refetch, data: comments = [] } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/comments/${serviceID}`)
            return res.json();
        },
        
    })

    return [comments, refetch]

}
export default useReview;