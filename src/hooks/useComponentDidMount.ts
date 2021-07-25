import { useEffect } from "react";

const useComponentDidMount = (onMountHandler: () => void) => {
  useEffect(() => {
    onMountHandler();
  });
};

export default useComponentDidMount;
