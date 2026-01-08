import React, { useEffect ,useRef, useState} from 'react'

export default function Web() {
    const workerRef=useRef(null);
    const [data,setData]=useState([]);
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);


    useEffect(()=>{
         workerRef.current=new Worker(new URL("../../worker/data.js",import.meta.url));
        workerRef.current.onmessage=(e)=>{
            console.log(e.data);
            setData(e.data);
            setLoading(false);
        }
        workerRef.current.postMessage({number:4000001});
        workerRef.current.onerror=(err)=>{
            console.log(err);
            setError(err);
            setLoading(false);
        }

        return ()=>{
            workerRef.current?.terminate();
        }
        },[])  
  return (
    <div>
      <h1>Welcome to Web.</h1>
      {data && data.slice(0,10).map((item)=>(
        <div key={item}>
            <h1>{item}</h1>
        </div>
      ))}
    </div>
  )
}
