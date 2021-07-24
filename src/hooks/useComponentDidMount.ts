import { useEffect } from "react";

const useComponentDidMount = (onMountHandler: () => JSX.Element) => {
  useEffect(() => {
    onMountHandler();
  });
};

export default useComponentDidMount;
