import { MovieList } from './MovieList';
import { useMovies } from './useMovies';
import { Title } from '@/components/Title';

export function MovieListContainer() {
  const { isLoading, isError, error, movies } = useMovies();

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="p-8">
        <Title>{error?.message}</Title>
      </div>
    );
  }

  return <MovieList movies={movies} />;
}
