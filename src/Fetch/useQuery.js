import { useState, useEffect, useCallback } from 'react';
import { fetchSetting } from './fetchConfig';

export const useQuery = ({ endpoint, query, isLazy = false }) => {
  const [loading, setLoading] = useState(!isLazy);
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState(null);

  const getQuery = (query) => {
    const values = [];
    if (query) {
      Object.keys(query).forEach((key) => {
        values.push(`${key}=${encodeURIComponent(query[key])}`);
      });
    }
    const preparedQuery = values.join('&');
    return values.length ? `?${preparedQuery}` : '';
  };

  const fetchPayload = useCallback(async ({ query }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_PATH}/${endpoint}${getQuery(query)}`,
        {
          credentials: 'omit',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0',
            'Accept': 'application/json', // Poprawione, aby akceptować JSON
            'Content-Type': 'application/json',
          },
          method: 'GET',
          mode: 'cors',
        }
      );

      const textResponse = await response.text();

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Received non-JSON response');
      }

      const res = JSON.parse(textResponse);
      setPayload(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [endpoint, query]);

  const refetch = useCallback(
    (newQuery) => {
      fetchPayload({ query: newQuery || query });
    },
    [fetchPayload, query]
  );

  useEffect(() => {
    if (!isLazy) {
      fetchPayload({ query });
    }
  }, [isLazy, fetchPayload, query]);

  return {
    loading,
    payload,
    error,
    refetch,
  };
};