import { useState, useEffect } from "react";
import { usePromise } from "react-use";

const usePromiseDemo = ({ promise }: { promise: Promise<Response> }) => {
  const mounted = usePromise();
  const [value, setValue] = useState(undefined);

  useEffect(() => {
    (async () => {
      const value = await mounted(promise);
      const json = await value.json();
      // This line will not execute if <Demo> component gets unmounted.
      setValue(JSON.stringify(json));
    })();
  });

  return value;
};

export default usePromiseDemo;
