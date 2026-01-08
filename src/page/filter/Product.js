import React, { useEffect,useState } from 'react'
import { useFilterProduct } from './useFilterProduct';
import { useProductFilterWorker } from './useProductFilterWorker';

export default function Product() {
    const [data,setData]=useState([]);
    const [searchTerm,setSearchTerm]=useState("");
    const [minPrice,setMinPrice]=useState("");
    const [maxPrice,setMaxPrice]=useState("");
    const fetchData=async()=>{
        try{
            const response=await fetch("https://fakestoreapi.com/products");
            const res=await response.json();
            setData(res);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
    // const {filterData}=useFilterProduct(data,{searchTerm,minPrice,maxPrice});
    const {loading,filterData}=useProductFilterWorker(data,{searchTerm,minPrice,maxPrice});
  return (
    <div>
        <div>
            <input
            type="text"
            placeholder='Search by title'
            value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}
            />
        <input
        type="number"
        placeholder='Min Price'
        value={minPrice}
        onChange={(e)=>{setMinPrice(e.target.value)}}
        />
        <input
            type="number"
            placeholder='Max Price'
            value={maxPrice}
            onChange={(e)=>{setMaxPrice(e.target.value)}}
        />
        </div>
        
      { filterData.map((item)=>(
        <div key={item.id}>
            <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  )
}
