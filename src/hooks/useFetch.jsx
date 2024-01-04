import React, { useState, useEffect } from "react";

function useFetch(url, trigger) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      if (!res.ok) throw Error("Error al consumir la api");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    trigger && getData();
  }, [url, trigger]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
