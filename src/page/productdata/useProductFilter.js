import { useMemo } from "react";


export const useProductFilter=(data,filters)=>{
    const {searchTerm,minPrice,maxPrice}=filters;
    
    const filterData=useMemo(()=>{
        let filterResults=data;
        if(searchTerm){
            let searchTermLower=searchTerm.toLowerCase();
            filterResults=filterResults.filter((item)=>{
                return item.title.toLowerCase().includes(searchTermLower);
            })
        }
        if(minPrice){
            filterResults=filterResults.filter((item)=>item.price <= parseFloat(minPrice));
        }
        if(maxPrice){
            filterResults=filterResults.filter((item)=>item.price >= parseFloat(maxPrice));
        console.log("Max price result" ,filterResults);
        }
        return filterResults;
    },[searchTerm,minPrice,maxPrice,data])
    return {filterData};
}