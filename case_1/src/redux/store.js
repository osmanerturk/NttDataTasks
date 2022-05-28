import { configureStore } from "@reduxjs/toolkit";
import  case1Slice  from "./case1Slice";
export const store = configureStore({
    reducer:{
        case1:case1Slice
    }
})