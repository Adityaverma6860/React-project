import React from "react";
import { setCountDemo } from "../src/Actions/Actions";
import { useDispatch, useSelector } from "react-redux";

export default function GlobelRedux() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.MyCount.count);

  const MyButton = () => {
    dispatch(setCountDemo(count + 1));
  };

  return (
    <>
      <h1>Redux Page</h1>
      <button onClick={MyButton}>Increase</button>
      <h1>Value of Count is : {count}</h1>
    </>
  );
}
