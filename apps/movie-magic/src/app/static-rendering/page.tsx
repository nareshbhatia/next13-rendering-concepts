import { MoviesList } from './MovieList';
import * as React from 'react';

export default function StaticRenderingPage() {
  console.log('----> Rendering StaticRenderingPage');
  return (
    <div className="mx-auto max-w-3xl p-4">
      <MoviesList />
    </div>
  );
}
