import { useState, useEffect, useRef } from "react";

export default function useClickOutside(initialIsVisible) {
  const ref = useRef(null);
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);

  const handleHideDropdown = () => {
    setIsComponentVisible(false);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("keydown", handleHideDropdown, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("keydown", handleHideDropdown, true);
    };
  });

  return [ref, isComponentVisible, setIsComponentVisible];
}
