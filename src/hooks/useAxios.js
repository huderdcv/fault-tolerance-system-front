import axios from 'axios';
import { useEffect, useState } from 'react';
import { getEnvVariables } from '../helpers/getEnvVariables';

export const useAxios = () => {
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getAxios();
  }, []);

  const { VITE_SERVER1_URL } = getEnvVariables();

  const getAxios = async () => {
    try {
      const { data } = await axios.get(`${VITE_SERVER1_URL}/todos`);
      setstate({
        data,
        isLoading: false,
        hasError: false,
        error: null,
      });
    } catch (error) {
      setstate({
        data: null,
        isLoading: false,
        hasError: true,
        error,
      });
    }
  };

  return {
    ...state,
    state,
  };
};
