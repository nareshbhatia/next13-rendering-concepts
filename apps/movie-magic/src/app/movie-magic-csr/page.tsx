'use client';

import { MovieList } from './MovieList';
import { useMovies } from './useMovies';
import { Nav } from '@/components/Nav';
import { Title } from '@/components/Title';
import type { SearchParams } from '@/models';

export interface MovieMagicCsrProps {
  searchParams: SearchParams;
}

export default function MovieMagicCsr({ searchParams }: MovieMagicCsrProps) {
  console.log('----> Rendering Movie Magic CSR');
  console.log('----> searchParams', searchParams);
  const { isLoading, isError, error, movies } = useMovies(searchParams);

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
    <div className="mx-auto max-w-3xl p-4">
      <div className="divide-y divide-slate-200">
        <Nav />
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
