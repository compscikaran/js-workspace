import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { set } from "./action";

export const SetCounter = () => {
  const initialCount = useSelector(store => store.count);
  const [count, setCount] = useState(initialCount);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(initialCount)
  }, [initialCount])

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(count));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input id="set-to" type="number" value={count} onChange={(e) => setCount(e.target.value)}/>
        <input type="submit" />
      </form>
    </section>
  );
};
