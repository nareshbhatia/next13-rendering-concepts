'use client';

import { useMovies } from './useMovies';
import { Footer } from '@/components/Footer';
import { MovieTable } from '@/components/MovieTable';
import { Title } from '@/components/Title';

export default function ClientComponent1() {
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

  return (
    <div className="p-8">
      <Title>Client Component 1</Title>
      <MovieTable movies={movies} />
      <Footer />
    </div>
  );
}
