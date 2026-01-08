import { useState,useEffect,useRef } from "react";


export const useProductFilterWorker=(data,filter)=>{
    const workerRef=useRef("");
    const [filterData,setFilterData]=useState([]);
    const [loading,setLoading]=useState(false);
    const {searchTerm,minPrice,maxPrice}=filter;


    useEffect(()=>{
        workerRef.current=new Worker(new URL("./filterWorker.js",import.meta.url));

        workerRef.current.onmessage=(e)=>{
            setFilterData(e.data);
            setLoading(true);
            console.log(e.data);
            console.log("Work Completed");
            
        }
        workerRef.current.onerror=(err)=>{
            console.log(err);
        }

        return()=>{
            workerRef.current.terminate();
        }
    },[ 
    ]);

    useEffect(()=>{
        if(data.length>0){
            setLoading(true);
            workerRef.current.postMessage({data,filter})
        }
    },[ searchTerm,minPrice,maxPrice,data]);


    return {loading,filterData}



}