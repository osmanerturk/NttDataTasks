import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import CaseCard from "./components/CaseCard";
import Spinner from "./components/Spinner";

import { useDispatch, useSelector } from "react-redux";
import { getAsyncCase2 } from "./redux/case2Slice";

function App() {
  const case2 = useSelector((state) => state.case2.items);
  const isLoading = useSelector((state) => state.case2.isLoading);
  const dispatch = useDispatch();

  React.useEffect(()=> { 
    dispatch(getAsyncCase2())
  },[])


  return (
    <>
    {
      isLoading ?
      <div className="absolute top-0 left-0 bg-white" style={{height:'100vh', width:'100vw'}}>
        <div>
         <Spinner />
       </div>
      </div>
      :
      <ul>
        {case2.map((item) => (
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
