import { configureStore } from "@reduxjs/toolkit";
import  case3Slice  from "./case3Slice";
export const store = configureStore({
    reducer:{
        case3:case3Slice
    }
})