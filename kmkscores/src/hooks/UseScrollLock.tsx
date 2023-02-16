import { useEffect, useState } from "react";

export const useScrollLock = () => {
  const [isLocked, setIsLocked] = useState<boolean>(
    document.body.style.overflowY === "hidden"
  );

  useEffect(() => {
    document.body.style.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked]);

  function toggle(): void {
    setIsLocked((prev) => !prev);
  }

  return toggle;
};
