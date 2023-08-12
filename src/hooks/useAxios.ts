import { useState, useEffect } from 'react';
import axios from 'axios';

type AxiosState = {
  data: any | null;
  error: Error | null;
  loading: boolean;
};

const useAxios = (options: any): AxiosState => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export default useAxios;
