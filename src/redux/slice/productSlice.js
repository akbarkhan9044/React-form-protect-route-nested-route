import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "../action/fetchProduct";

const initialState={
    product:[],
    singleProduct:{}
}

export const productSlice =createSlice({
    name:"productSlice",
    initialState,
    reducers:{
        addToProduct:(state,action)=>{
            state.product=action.payload
        },
        singleProduct:(state,action)=>{
            state.singleProduct=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.product=action.payload
        });
        builder.addCase(fetchProduct.rejected,(state,action)=>{
        });
        builder.addCase(fetchProduct.pending,(state,action)=>{
        });
    }
})

export const {addToProduct,singleProduct}=productSlice.actions;
export default productSlice.reducer;