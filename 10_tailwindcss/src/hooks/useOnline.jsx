import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("online", handleIsOnline);
    window.addEventListener("offline", handleIsOffline);
    function handleIsOnline() {
      setIsOnline(true);
    }
    function handleIsOffline() {
      setIsOnline(false);
    }

    return () => {
      window.removeEventListener("online", handleIsOnline);
      window.removeEventListener("offline", handleIsOffline);
    };
  }, []);
  return isOnline;
};
export default useOnline;
