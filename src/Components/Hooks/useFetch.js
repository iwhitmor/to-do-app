import { useEffect, useMemo, useState } from "react";

export default function useFetch(url) {
  // Store fetched data here
  const [loading, setLoading] = useState(true);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {

    if (!shouldFetch) return;

    async function fetchData() {

      let response = await fetch(url);
      let body = await response.json();
      // TODO: error handling!
      setTasks(body);
      setLoading(false);
    };

    setShouldFetch(false);
    fetchData();
  }, [url, shouldFetch]) // Only re-fetch when url changes

  return useMemo(() => ({
    tasks,
    isLoading: loading,
    setTasks,
    reload: () => setShouldFetch(true),
  }), [tasks, loading]);
}