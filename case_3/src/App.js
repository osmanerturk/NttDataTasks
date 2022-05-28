import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import CaseCard from "./components/CaseCard";
import Spinner from "./components/Spinner";

import { useDispatch, useSelector } from "react-redux";
import { getOffers,getCount } from "./redux/case3Slice";

function App() {
  const case3 = useSelector((state) => state.case3.items);
  const count = useSelector((state) => state.case3.offerCount);
  const isLoading = useSelector((state) => state.case3.isLoading);
  const dispatch = useDispatch();

  React.useEffect(()=> { 
    dispatch(getCount())
      .then(resp => {
        dispatch(getOffers(resp.payload))
      })
  },[])


  return (
    <>
    {
      isLoading ?
      <div className="absolute top-0 left-0 bg-white" style={{height:'100vh', width:'100vw'}}>
        <div>
         <Spinner />
       </div>
       <div className="text-center">
        {count && `${count} offers are loading...`} 
       </div>
      </div>
      :
      <ul>
        {case3.map((item) => (
          <li key={nanoid()}>
            <CaseCard item={item} />
          </li>
        ))}
      </ul>
    }
    </>
  );
}

export default App;
