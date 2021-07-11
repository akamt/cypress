import { useState } from "react";
import { useTimeout } from "../hooks/useTimeout";
import usePrevious from "../hooks/usePrevious";

const ExampleTimerFiveSeconds = (): JSX.Element => {
  const [seconds, setSeconds] = useState(0);

  useTimeout(() => {
    setSeconds(seconds + 1);
  }, 5000);

  return <p>{seconds}</p>;
};

const MoneyCount = () => {
  const [value, setValue] = useState(0);
  const lastValue = usePrevious(value);

  return (
    <div>
      <p>
        Current: {value} - Previous: {lastValue}
      </p>
      <button onClick={() => setValue(value + 1)}>Increment Money</button>
    </div>
  );
};

const HookPage = () => (
  <>
    <ExampleTimerFiveSeconds />
    <MoneyCount />
  </>
);

export default HookPage;
