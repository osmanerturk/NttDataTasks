import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import CaseCard from "./components/CaseCard";

import { useDispatch, useSelector } from "react-redux";
import { getAsyncCase1 } from "./redux/case1Slice";

function App() {
  const case1 = useSelector((state) => state.case1.items);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAsyncCase1());
  }, []);

  return (
    <ul>
      {case1.map((item) => (
        <li key={nanoid()}>
          <CaseCard item={item} />
        </li>
      ))}
    </ul>
  );
}

export default App;
