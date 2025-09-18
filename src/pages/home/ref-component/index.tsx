import React, { useRef, useState,forwardRef, useImperativeHandle } from "react";

function RefComponent() {
    
    const ref = useRef<{ increase: () => void}>(3);
  
    const increase = () => {
        ref.current.increase();
    }

  return(
    <div>
        <button onClick={increase}>+</button>
        <Counter ref={ref}/>
    </div>
  )
}
// không thể lấy ref thông qua props được.
const Counter = forwardRef(function Counter(props: any, ref: any) {

  console.log({props: props, ref})
  
  const [count, setCount] = useState(0);
  
  useImperativeHandle(ref, () => {
    return {

      abc: 10,
      increase,
      descreas
    }
  },[])

  const increase = () => {
    setCount((c) => c + 1);
  };
  const descreas = () => {
    setCount((c) => c -1);
  };
  return (
    <>
        <h1>{count}</h1>
    </>
  );
});

export default RefComponent;
