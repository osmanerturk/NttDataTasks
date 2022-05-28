import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCount = createAsyncThunk("case3/count", async() => {
  const res = await axios.get(
    "https://snetmyapp.herokuapp.com/get_offer_count"
  );
  const count = res.data.num_offers;
  return count;
});

export const getOffers = createAsyncThunk("case3/offers", async(count) => {
  const queries = [];
  for (let i = 0 ; i < count; i++) {
    queries.push(axios.get("https://snetmyapp.herokuapp.com/case3"))
  }
  console.log(count)
  var offersResp = await axios.all(queries)
  console.log(offersResp.map(x => x.data).sort((a,b) => a.Cash-b.Cash))
  return offersResp.map(x => x.data).sort((a,b) => a.Cash-b.Cash)
});


export const case3Slice = createSlice({
  name: "case3",
  initialState: {
    offerCount: null,
    isLoading: false,
    items: [],
  },
  reducers: {},
  extraReducers: {
    
    [getCount.fulfilled]: (state, action) => {
      state.offerCount = action.payload;
    },
    [getOffers.fulfilled]: (state, action) => {
      state.items = action.payload
      state.isLoading = false;
    },
    [getOffers.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export default case3Slice.reducer;
