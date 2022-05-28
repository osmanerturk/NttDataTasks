import { configureStore } from "@reduxjs/toolkit";
import  case2Slice  from "./case2Slice";
export const store = configureStore({
    reducer:{
        case2:case2Slice
    }
})