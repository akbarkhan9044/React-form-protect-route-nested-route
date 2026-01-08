import React, { useEffect, useMemo, useState } from 'react'

export default function Product() {
    const [data,setData]=useState([]);
    const [searchTerm,setSearchTerm]=useState("");
    const [minPrice,setMinPrice]=useState("");
    const [maxPrice,setMaxPrice]=useState("");
    const fetchData=async()=>{
        const response=await fetch("https://fakestoreapi.com/products");
        const res=await response.json();
        setData(res);
        
    }

    console.log("Data is something... ",data);

    let filterData= useMemo(()=>{
        let filters=data;

        if(searchTerm){
        let searchTermLowerCase=searchTerm.toLowerCase();
      filters=  data.filter((item)=>{
            return item.title.toLowerCase().includes(searchTermLowerCase);
        })
    }
    if(minPrice){
        filters= data.filter((item)=>item.price>=parseFloat(minPrice));
    }
    if(maxPrice){
        filters =data.filter((item)=>item.price<=parseFloat(maxPrice));
    }

return filters;

    },[data,searchTerm,maxPrice,minPrice])
   
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
      <h1>Welcome to Product.</h1>
      <input
            type="text"
            placeholder='Search Something....'
            value={searchTerm}
            onChange={(e)=>{setSearchTerm(e.target.value)}}
            />
            <input
            type="number"
            placeholder='Enter minimum price'
            value={minPrice}
            onChange={(e)=>{setMinPrice(e.target.value)}}
            />
            <input
            type="number"
            placeholder='Enter maximum price'
            value={maxPrice}
            onChange={(e)=>{setMaxPrice(e.target.value)}}
            />
      {filterData && filterData.map((item)=>(
        <div key={item.id}>
            <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  )
}
