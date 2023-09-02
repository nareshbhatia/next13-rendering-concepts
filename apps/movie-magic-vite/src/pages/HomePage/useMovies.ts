import { useRefreshContext } from './RefreshContextProvider';
import type { Movie } from '@/models';
import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

/**
 * Hook to fetch movies
 */
export function useMovies() {
  const [searchParams] = useSearchParams();
  const searchParamsString = searchParams.toString();
  const { refreshCount } = useRefreshContext();
  console.log('----> useMovies: searchParams =', searchParamsString);
  console.log('----> useMovies: refreshCount =', refreshCount);

  const API_URL = import.meta.env.VITE_API_URL as string;
  const failMessage = 'Failed to get movies';

  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [error, setError] = React.useState<Error>();
  const [movies, setMovies] = React.useState<Movie[]>([]);

  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        // call the api
        const url = `${API_URL}/movies?${searchParamsString}`;
        console.log('----> HTTP GET', url);
        setIsLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          setIsError(true);
          setError(new Error(`${failMessage} (${response.status})`));
          setIsLoading(false);
          return;
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const movies: Movie[] = await response.json();
        setMovies(movies);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error instanceof Error ? error : new Error(failMessage));
        setIsLoading(false);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchMovies();
  }, [API_URL, searchParamsString, refreshCount]);
  return { isLoading, isError, error, movies };
}
