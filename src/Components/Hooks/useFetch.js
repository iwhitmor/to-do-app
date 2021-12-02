import { useEffect, useMemo, useState } from "react";

export default function useFetch(url) {
  // Store fetched data here
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(url);
      let body = await response.json();
      // TODO: error handling!
      setTasks(body);
      setLoading(false);
    };

    setLoading(true);
    fetchData();
  }, [url]) // Only re-fetch when url changes

  return useMemo(() => ({
    tasks,
    setTasks,
    isLoading: loading,
  }), [tasks, loading]);
}