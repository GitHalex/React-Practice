import { useState, useEffect } from "react";

// Define las interfaces para las props y el estado
interface PokemonState {
  id: number;
  name: string;
  avatar: string;
}

interface FetchError {
  err: boolean;
  status?: number;
  statusText?: string;
}

const useFetch = (url: string) => {
  const [data, setData] = useState<PokemonState[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<FetchError | null>(null);

  useEffect(() => {
    // Función para manejar la petición inicial
    const getData = async (url: string) => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
          };
        }
        const data = await res.json();

        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (error) {
        setIsPending(true);
        setError(error as FetchError);
      }
    };

    getData(url);
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
