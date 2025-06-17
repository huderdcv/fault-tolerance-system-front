import axios from 'axios';
import { useEffect, useState } from 'react';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_SERVER1_URL, VITE_SERVER2_URL } = getEnvVariables();
const servers = [VITE_SERVER1_URL, VITE_SERVER2_URL];
const TIMEOUT = 6000;

export const useAxios = () => {
  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
    serverUsing: null,
  });

  useEffect(() => {
    getAxios();
  }, []);

  const getAxios = async () => {
    for (const [index, server] of servers.entries()) {
      setstate({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
        serverUsing: index + 1,
      });

      try {
        const source = axios.CancelToken.source();
        const timeout = setTimeout(() => source.cancel(), TIMEOUT);

        const response = await axios.get(`${server}/students`, {
          cancelToken: source.token,
        });
        clearTimeout(timeout);

        setstate({
          data: response.data,
          isLoading: false,
          hasError: false,
          error: null,
          serverUsing: index + 1,
        });

        return;
      } catch (error) {
        setstate({
          data: null,
          isLoading: false,
          hasError: true,
          error,
          serverUsing: null,
        });
      }
    }
    setstate({
      data: null,
      isLoading: false,
      hasError: true,
      error: { msg: 'Error: Todos los servidores fallaron' },
      serverUsing: null,
    });
  };

  return {
    ...state,
    state,
  };
};
