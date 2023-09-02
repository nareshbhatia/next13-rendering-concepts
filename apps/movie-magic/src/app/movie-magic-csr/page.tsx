'use client';

import { MovieListContainer } from './MovieListContainer';
import { RefreshContextProvider } from './RefreshContextProvider';
import { Nav } from '@/components/Nav';

export default function MovieMagicCsr() {
  console.log('----> Rendering Movie Magic CSR');

  return (
    <RefreshContextProvider>
      <div className="mx-auto max-w-3xl p-4">
        <div className="divide-y divide-slate-200">
          <Nav />
          <MovieListContainer />
        </div>
      </div>
    </RefreshContextProvider>
  );
}
