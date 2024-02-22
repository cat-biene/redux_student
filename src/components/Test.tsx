import { useEffect, useState } from "react";


export default function Test() {


    const [state, setState] = useState<number>(0);
    const [state_01, setState_01] = useState<number>(0);

    useEffect(() => {
        console.log("useEffect отработал");
    }, [state]);

    useEffect(() => {
        console.log("useEffect отработал");
    }, [state_01]);

  return (
    <div>
        <p>{state}</p>
        <button onClick={() => setState(state + 1)}>+</button>
        <button onClick={() => setState(state - 1)}>-</button>

        <p>{state_01}</p>
        <button onClick={() => setState_01(state_01 + 1)}>+</button>
        <button onClick={() => setState_01(state_01 - 1)}>-</button>
    </div>
  )
}