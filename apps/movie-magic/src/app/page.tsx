import Link from 'next/link';
import * as React from 'react';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-8 lg:py-12">
      <div className="relative w-full bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:py-20">
        <div className="mx-auto max-w-prose lg:text-lg">
          <article className="prose prose-slate prose-sky mx-auto">
            <h1>Next.js 13 Rendering Concepts</h1>

            <h2>Server Components</h2>
            <h3>Examples</h3>
            <table>
              <thead>
                <tr>
                  <th>Dynamic Functions</th>
                  <th>Data Cached</th>
                  <th>Rendering</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No</td>
                  <td>N/A (No Data)</td>
                  <td>Statically Rendered</td>
                  <td>
                    <Link href="/server-component-1">/server-component-1</Link>
                  </td>
                </tr>
                <tr>
                  <td>No</td>
                  <td>Yes</td>
                  <td>Statically Rendered</td>
                  <td>
                    <Link href="/server-component-2">/server-component-2</Link>
                  </td>
                </tr>
                <tr>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Dynamically Rendered</td>
                  <td>
                    <Link href="/server-component-3?q=top-10">
                      /server-component-3?q=top-10
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>No</td>
                  <td>No</td>
                  <td>Dynamically Rendered</td>
                  <td>
                    <Link href="/server-component-4">/server-component-4</Link>
                  </td>
                </tr>
                <tr>
                  <td>Yes</td>
                  <td>No</td>
                  <td>Dynamically Rendered</td>
                  <td>
                    <Link href="/server-component-5?q=top-10">
                      /server-component-5?q=top-10
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>Client Components</h2>
            <p>
              Example:{' '}
              <Link href="/client-component-1">/client-component-1</Link>
            </p>

            <h2>Movie Magic - A Realistic Example</h2>
            <p>
              This is a realistic example implemented in two ways to show the
              performance benefits of React 18 and Next.js:
            </p>
            <ol>
              <li>
                <Link href="/movie-magic-csr">Movie Magic CSR</Link>: This
                version uses Client-Side Rendering (CSR), which is the old way
                (pre React 18)
              </li>
              <li>
                <Link href="/movie-magic-rsc">Movie Magic RSC</Link>: This
                version uses React Server Components for data fetching, and
                React Client Components for interactivity.
              </li>
            </ol>
          </article>
        </div>
      </div>
    </div>
  );
}
