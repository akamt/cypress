import { useEvent, useList } from "react-use";
import { useCallback } from "react";

const useEventList = () => {
  const [list, { push, clear }] = useList();

  const onKeyDown = useCallback(({ key }) => {
    if (key === "r") clear();
    push(key);
  }, []);

  useEvent("keydown", onKeyDown);

  return list;
};

export default useEventList;
