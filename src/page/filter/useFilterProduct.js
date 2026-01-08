import React,{useState,useEffect, useMemo} from "react";



export const useFilterProduct=(data,filter)=>{
const {searchTerm,minPrice,maxPrice}=filter;
console.log("Data",data);

const filterData=useMemo(()=>{
    let filterResultData=data;
    if(searchTerm){
        let searchTermLower=searchTerm.toLowerCase();
        filterResultData=filterResultData.filter((item)=>{
            return item.title.toLowerCase().includes(searchTermLower);
        })
    }
    if(minPrice){
        filterResultData=filterResultData.filter((item)=>item.price >=parseFloat(minPrice)); 
    }
    if(maxPrice){
        filterResultData=filterResultData.filter((item)=>item.price <= parseFloat(maxPrice));
    }
    return filterResultData;
},[searchTerm,minPrice,maxPrice,data]);

return {filterData}

}
