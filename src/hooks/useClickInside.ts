import React, { useEffect } from "react";

const useClickInside = (
  ref: React.MutableRefObject<HTMLDivElement>,
  callback: () => void
) => {
  const handleClick = (e) => {
    if (ref.current && ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useClickInside;
