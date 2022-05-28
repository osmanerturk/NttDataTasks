import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAsyncCase1 = createAsyncThunk(
    "case/1",
    async () => {
      const res = await axios.get("https://snetmyapp.herokuapp.com/case1", );
      return res.data;
    }
  );

export const case1Slice = createSlice({
    name:"case1",
    initialState : {
        items:[

        ]
    },
    reducers:{

    },
    extraReducers:{
        [getAsyncCase1.fulfilled]: (state, action) => {
            let all= action.payload
            let offerList= all.offerList
            state.items = offerList
          },
    },
});

export default case1Slice.reducer;