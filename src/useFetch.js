import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [isPending, setIspending] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(()=>{
        fetch(url)
            .then(res=>{
                if (! res.ok){
                   throw Error(`could not fetch data for this resourse`);
                }
                return res.json()
            })
                .then(data=>{
                    setIspending(false);
                    setErrors(null);
                    setData(data);   
                })
                    .catch(err=>{ 
                       setIspending(false);
                       setErrors(err.message);            
                    });
    },[]);

    return{
        data,
        isPending,
        errors,
    };
}

export default useFetch;