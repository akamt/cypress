import React, { useEffect } from "react";

const useClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement>,
  callback: () => void
) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
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

export default useClickOutside;
