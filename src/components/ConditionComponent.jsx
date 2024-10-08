import { useState } from "react";

const ConditionComponent = () => {
  const [change, setChange] = useState(true);
  const display = change ? "Hi there" : "bye there";

  return (
    <div>
      {display} <button onClick={() => setChange(!change)}>Click!</button>
    </div>
  );
};

export default ConditionComponent;
