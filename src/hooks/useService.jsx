const useService = async(id) => {
    const res=await fetch(`https://service-boss-server.vercel.app/service/${id}`)
    const data=await res.json()
    // console.log(data);
    return data;
};

export default useService;