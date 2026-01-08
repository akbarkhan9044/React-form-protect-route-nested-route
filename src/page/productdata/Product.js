import React, { useState,useEffect } from 'react'
import { useProductFilter } from './useProductFilter';

export default function ProductData() {
  const [data,setData]=useState([]);
  const [searchTerm,setSearchTerm]=useState("");
  const [minPrice,setMinPrice]=useState("");
  const [maxPrice,setMaxPrice]=useState("");


  const fetchData=async()=>{
    const response=await fetch("https://fakestoreapi.com/products");
    const res=await response.json();
    setData(res);
  }


useEffect(()=>{
  fetchData();
},[]);

const {filterData}=useProductFilter(data,{
  searchTerm,minPrice,maxPrice
});

  return (
    <div>
      <input
      type="text"
      placeholder='Enter Some data'
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
      {filterData.map((item)=>(
        <div>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  )
}
