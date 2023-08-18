import { MoviesList } from './MovieList';
import * as React from 'react';

export default function StaticRendering() {
  return (
    <div className="mx-auto max-w-3xl p-4">
      <MoviesList />
    </div>
  );
}
