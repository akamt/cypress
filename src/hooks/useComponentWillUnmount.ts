import { useEffect } from "react";

const useComponentWillUnmount = (onUnmountHandler: () => void) => {
  useEffect(() => {
    onUnmountHandler();
  }, []);
};

export default useComponentWillUnmount;
