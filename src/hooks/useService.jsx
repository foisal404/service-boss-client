const useService = async(id) => {
    const res=await fetch(`http://localhost:5000/service/${id}`)
    const data=await res.json()
    // console.log(data);
    return data;
};

export default useService;