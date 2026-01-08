
onmessage=(e)=>{
    const {data,filter}=e.data;
    const {searchTerm,minPrice,maxPrice}=filter;


    let filterResults=data;
    if(searchTerm){
        let searchTermLowerCase=searchTerm.toLowerCase();
        filterResults=filterResults.filter((item)=>{
            return item.title.toLowerCase().includes(searchTermLowerCase)
        });
    }

    if(minPrice){
        filterResults=filterResults.filter((item)=>item.price <= parseFloat(minPrice));
    }
    if(maxPrice){
        filterResults=filterResults.filter((item)=>item.price >= parseFloat(maxPrice));
    }

    postMessage(filterResults);

}