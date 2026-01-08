import { useEffect,useRef ,useState} from "react";

export const useWebWorkers=(workerpath)=>{
   const workerRef=useRef(null);
    const [prime,setPrime]=useState([]);
    const  [input,setInput]=useState("");
    const [loading, setLoading] = useState(false); 
    const [error,setError]=useState(null);

const execute=(data)=>{
    setLoading(true);
    setError(null);
    workerRef.current.postMessage({number:Number(data)})
}

    useEffect(()=>{
        workerRef.current=new Worker(new URL("../worker/dataWorkers.js",import.meta.url));
        workerRef.current.onmessage=(e)=>{
            setPrime(e.data);
            setLoading(false);
        }
      
        workerRef.current.error=(err)=>{
            setError(err);
            setLoading(false);
        }
        return()=>{
            workerRef.current?.terminate();
        }
    
    },[workerpath]);

    return {execute,prime,error,loading}

}