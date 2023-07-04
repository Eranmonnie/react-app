import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [isPending, setIspending] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(()=>{

        const Abort  =  new AbortController();

        

        fetch(url, {signal: Abort.signal} )
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

                        if (err.message === 'AbortError'){
                            console.log('fetch aborted');
                        }

                        else {
                            setIspending(false);
                            setErrors(err.message);  
                        }
                                
                    });

        return ()=> Abort.abort();
        
    },[]);

    return{
        data,
        isPending,
        errors,
    };
}

export default useFetch;