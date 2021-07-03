import React, { useMemo, useState } from "react";

const UseMemo = (): JSX.Element => {
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);
  const [count03, setCount03] = useState(0);

  const result01 = () => setCount01(count01 + 1);
  const result02 = () => setCount02(count02 + 1);
  const result03 = () => setCount03(count03 + 1);

  const square2 = () => {
    let i = 0;
    while (i < 2000000) i++;
    return count03 * count03;
  };

  const square = useMemo(() => {
    let i = 0;
    while (i < 2000000) i++;
    return count02 * count02;
  }, [count02]);

  return (
    <>
      <div>result01: {count01}</div>
      <div>result02: {count02}</div>
      <div>result03: {count03}</div>
      <div>square: {square}</div>
      <div>square2: {square2()}</div>
      <button onClick={result01}>increment</button>
      <button onClick={result02}>increment</button>
      <button onClick={result03}>increment</button>
    </>
  );
};

export default UseMemo;
