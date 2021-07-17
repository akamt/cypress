import { useState, useRef } from "react";
import { useTimeout } from "../hooks/useTimeout";
import usePrevious from "../hooks/usePrevious";
import useClickInside from "../hooks/useClickInside";
import useClickOutside from "../hooks/useClickOutside";

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

const HitBox = ({ onClickInside }) => {
  const clickRef = useRef<HTMLDivElement>(null);
  useClickInside(clickRef, onClickInside);

  return (
    <div
      className="hit-box"
      ref={clickRef}
      style={{
        border: "5px solid green",
        height: 300,
        width: 600,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Hit the box!</p>
    </div>
  );
};

const HitBox2 = ({ onClickOutside }) => {
  const clickRef = useRef<HTMLDivElement>(null);
  useClickOutside(clickRef, onClickOutside);

  return (
    <div
      className="hit-box"
      ref={clickRef}
      style={{
        border: "5px solid green",
        height: 300,
        width: 600,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p>Don't Hit the box!</p>
    </div>
  );
};

const HookPage = (): JSX.Element => (
  <>
    <ExampleTimerFiveSeconds />
    <MoneyCount />
    <HitBox onClickInside={() => alert("hit the box")} />
    <HitBox2 onClickOutside={() => alert("don't hit the box")} />
  </>
);

export default HookPage;
