import Link from 'next/link';
import * as React from 'react';

export default function ServerComponent1() {
  console.log('----> Rendering ServerComponent1');
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Server Component 1</h1>
      <footer className="mt-8">
        <Link className="text-sky-700 underline" href="/">
          Home
        </Link>
      </footer>
    </div>
  );
}
