import Counter from './Counter';
import { SetCounter } from './SetCounter';

const Application = () => {
  return (
    <div className="Application">
      <Counter /><br/><br/>
      <SetCounter/>
    </div>
  );
};

export default Application;
