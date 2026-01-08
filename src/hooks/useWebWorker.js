import { useEffect,useState ,useRef} from "react";


export const useWebWorker=(workerpath)=>{

    const workerRef = useRef(null);
    const [prime,setPrime]=useState([]);
    const  [input,setInput]=useState("");
    const [loading, setLoading] = useState(false); 
    const [error,setError]=useState(null);

 const execute=(data)=>{
    console.log("excute data",data)
    setLoading(true);
    setError(null);
    workerRef.current.postMessage({number:Number(data)})
}

    useEffect(()=>{
        workerRef.current=new Worker(new URL("../worker/dataWorker.js",import.meta.url));

        workerRef.current.onmessage=(e)=>{
            console.log("yes");
            setPrime(e.data);
            setLoading(false);
        }
        workerRef.current.onerror=(err)=>{
            setError(err);
            setLoading(false);
        }

        return()=>{
            workerRef.current?.terminate();
        }



    },[workerpath]);

    return {execute,prime,error,loading};
}