import Link from 'next/link';
import * as React from 'react';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-8 lg:py-12">
      <div className="relative w-full bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:py-20">
        <div className="mx-auto max-w-prose lg:text-lg">
          <article className="prose prose-slate mx-auto lg:prose-lg prose-a:text-sky-700">
            <h1>Next.js 13 Rendering Concepts</h1>
            <p>
              This application is intended to clarify Next.js 13 and (React 18)
              rendering concepts. Note that I am intentionally staying away from
              terms like CSR and SSR, SPAs and MPAs, as these terms come with
              lots of assumptions and baggage. For example, in Next.js 13, a
              client component does not automatically imply client-side
              rendering (CSR). During the initial page load, a client component
              is rendered to a static HTML preview on the server so that the
              user can see the content of the page immediately, without having
              to wait for the JavaScript bundle to download. On subsequent
              navigations to this page, Client Components are rendered entirely
              on the client, without the server-rendered HTML.
            </p>

            <h2>Server Components</h2>
            <p>
              Server Components are <strong>always</strong> rendered on the
              server. There are three subsets of server rendering: Static,
              Dynamic, and Streaming.
            </p>
            <ol>
              <li>
                <strong>Static Rendering</strong>: Routes are rendered at{' '}
                <strong>build time</strong>, and the result is cached. This
                optimization allows you to share the result of the rendering
                work between users and server requests.
              </li>
              <li>
                <strong>Dynamic Rendering</strong>: Routes are rendered at{' '}
                <strong>request time</strong>. This is useful when a route has
                data that is personalized to the user or has information that
                can only be known at request time, such as cookies or the
                URL&apos;s search params.
              </li>
              <li>
                <strong>Streaming</strong>: Routes are rendered at{' '}
                <strong>request time</strong>, and the work is split into chunks
                and streamed to the client as it becomes ready. This allows the
                user to see a preview of the page before it is fully rendered.
              </li>
            </ol>

            <h3>Examples</h3>
            <table>
              <thead>
                <tr>
                  <th>Dynamic Functions</th>
                  <th>Data</th>
                  <th>Rendering</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No</td>
                  <td>No</td>
                  <td>Statically Rendered</td>
                  <td>
                    <Link href="/server-component-1">/server-component-1</Link>
                  </td>
                </tr>
                <tr>
                  <td>No</td>
                  <td>Cached</td>
                  <td>Statically Rendered</td>
                  <td>
                    <Link href="/server-component-2">/server-component-2</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </div>
    </div>
  );
}
