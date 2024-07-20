import { useEffect, useState } from "react";

function useFetch() {
  const [apiData, setApiData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getApiData = async () => {
      isPending(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        setApiData(json);
      } catch (err) {
        setError(err);
      } finally {
        setIsPending(false);
      }
    };
    getApiData();
  }, [url]);
  return { apiData, isPending, error };
}
