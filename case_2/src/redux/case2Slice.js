import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAsyncCase2 = createAsyncThunk(
    "case/1",
    async () => {
      const res = await axios.get("https://snetmyapp.herokuapp.com/case2", );
      return res.data;
    }
  );

export const case2Slice = createSlice({
    name:"case2",
    initialState : {
        isLoading:false,
        items:[

        ]
    },
    reducers:{

    },
    extraReducers:{
        [getAsyncCase2.fulfilled]: (state, action) => {
            let all= action.payload
            let offerList= all.offerList
            state.items = offerList
            state.isLoading=false
          },
        [getAsyncCase2.pending]: (state, action) => {
            state.isLoading=true
          },
    },
});

export default case2Slice.reducer;