import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { decrement, increment, set } from "./action";

export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector(store => store.count);
  const dispatch = useDispatch();

  const actions = bindActionCreators({ increment, decrement, set }, dispatch);

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => actions.increment()}>Increment</button>
        <button onClick={() => actions.set(0)}>Reset</button>
        <button onClick={() => actions.decrement()}>Decrement</button>
      </section>
    </main>
  );
};

export default Counter;
