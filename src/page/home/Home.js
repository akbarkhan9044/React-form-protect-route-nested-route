import React, { useEffect, useRef,useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchProduct } from '../../redux/action/fetchProduct';
import { useDispatch,useSelector } from 'react-redux';
import { useWebWorker } from '../../hooks/useWebWorker';
import { useWebWorkers } from '../../hooks/useWebWorkers';
export default function Home() {
    const workerRef = useRef(null);
    // const [prime,setPrime]=useState([]);
    const  [input,setInput]=useState("");
    // const [loading, setLoading] = useState(true); // Added loading state
    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(fetchProduct());
    },[]);
    // const  {execute,prime,error,loading}=useWebWorker("../worker/dataWorker.js");
    const  {execute,prime,error,loading}=useWebWorkers("../worker/dataWorker.js");


    // useEffect(() => {
    //     // Create worker inside useEffect
    //      workerRef.current = new Worker(new URL("../../worker/dataWorker.js", import.meta.url));

    //     // Set up the listener
    //     workerRef.current.onmessage = (e) => {
    //         console.log("Worker found primes:", e.data);
    //         setPrime(e.data);
    //         setLoading(false);
    //     };

    //     workerRef.current.onerror = (error) => {
    //         console.error("Worker error:", error);
    //         setLoading(false);
    //     };

    //     // Send the message
    //     workerRef.current.postMessage({ number: 400000   });

    //     // Cleanup: Terminate worker when component unmounts
    //     return () => {
    //         workerRef.current?.terminate();
    //     };
    // }, []); // Empty array means this runs ONCE on mount

    

    const data=useSelector((state)=>state.product.product);

    const handleButton=()=>{
        execute(40000)
        alert("Button clicked");
    }

  return (
    <div>
                    <button onClick={()=>{handleButton()}}>Clicke me to know</button>
      <input
      type="text"
      placeholder='Enter some'
      value={input}
      onChange={(e)=>{setInput(e.target.value)}}
      />
        <h3>Prime Numbers (Calculated in Background):</h3>
            {loading ? (
                <p>Calculating primes...</p>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {prime.slice(0,100).map((item, index) => (
                        <span key={index} style={{ padding: '5px', border: '1px solid #ccc' }}>
                            {item}
                        </span>
                    ))}
                </div>
            )}

      <h1>Welcome to Home.</h1>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/form">Form</Link>
      <Link to="/admin">Admin</Link>
    </div>
  )
}
