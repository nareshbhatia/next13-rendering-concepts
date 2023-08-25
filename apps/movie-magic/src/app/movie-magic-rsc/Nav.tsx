'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import type { ChangeEvent } from 'react';

export function Nav() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.getAll('q').map((param) => param.toLowerCase());
  const cert = searchParams.getAll('cert').map((param) => param.toUpperCase());
  console.log('----> Nav: q =', q, ', ', 'cert =', cert);

  /**
   * navigate based on q and cert
   * @param q is empty (representing "all") or ["top-10"] or ["new-releases"]
   * @param cert is an array containing all the selected certs
   */
  const navigate = (q: string[], cert: string[]) => {
    // create searchParamsString
    const urlSearchParams = new URLSearchParams();
    if (q.length > 0) urlSearchParams.append('q', q[0]);
    cert.forEach((certString) => {
      urlSearchParams.append('cert', certString);
    });
    const searchParamsString = urlSearchParams.toString();

    // navigate
    const url = `/movie-magic-rsc?${searchParamsString}`;
    console.log('----> navigate to', url);
    router.push(url);
  };

  const handleQueryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    navigate(value === 'all' ? [] : [value], cert);
  };

  const handleCertChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    const newCerts = cert.includes(id)
      ? cert.filter((c) => c !== id)
      : cert.concat([id]);
    navigate(q, newCerts);
  };

  return (
    <nav className="px-6 py-4 text-sm font-medium">
      <ul className="flex items-center space-x-5 sm:space-x-10">
        <li>
          <Link className="text-sm text-sky-700 sm:text-lg" href="/">
            Home
          </Link>
        </li>
        <li>
          <select
            className="rounded-md border-0 py-1.5 pl-3 pr-10 text-xs text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-sky-600 sm:text-sm"
            id="query"
            name="query"
            onChange={handleQueryChange}
            value={q.length === 0 ? 'all' : q[0]}
          >
            <option value="all">All</option>
            <option value="top-10">Top 10</option>
            <option value="new-releases">New Releases</option>
          </select>
        </li>
        <li>
          <div className="flex items-center space-x-3 sm:space-x-5">
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  checked={cert.includes('PG-13')}
                  className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
                  id="PG-13"
                  name="PG-13"
                  onChange={handleCertChange}
                  type="checkbox"
                />
              </div>
              <div className="ml-2 text-xs leading-6 sm:ml-3 sm:text-sm">
                <label className="font-medium text-gray-900" htmlFor="PG-13">
                  PG-13
                </label>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  checked={cert.includes('R')}
                  className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
                  id="R"
                  name="R"
                  onChange={handleCertChange}
                  type="checkbox"
                />
              </div>
              <div className="ml-2 text-xs leading-6 sm:ml-3 sm:text-sm">
                <label className="font-medium text-gray-900" htmlFor="R">
                  R
                </label>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  checked={cert.includes('NR')}
                  className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
                  id="NR"
                  name="NR"
                  onChange={handleCertChange}
                  type="checkbox"
                />
              </div>
              <div className="ml-2 text-xs leading-6 sm:ml-3 sm:text-sm">
                <label className="font-medium text-gray-900" htmlFor="NR">
                  NR
                </label>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
