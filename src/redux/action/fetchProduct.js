import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProduct=createAsyncThunk(
    "fetch/product",
    async()=>{
        const response=await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        return response.data;
    }
   

)