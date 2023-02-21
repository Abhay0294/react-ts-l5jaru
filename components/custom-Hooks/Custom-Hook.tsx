/**
 * create a custom hook that fetches data from an API? This hook should take a URL and options for the fetch call, and return the response data as well as any error or loading states.
 */

import * as React from 'react';

import { useState, useEffect } from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url, options);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url, options]);

  return { data, error, isLoading };
}

export default useFetch;
