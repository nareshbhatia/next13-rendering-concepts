import Link from 'next/link';

export function Nav() {
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
          >
            <option>All</option>
            <option>Top 10</option>
            <option>New Releases</option>
          </select>
        </li>
        <li>
          <div className="flex items-center space-x-3 sm:space-x-5">
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
                  id="cert-pg-13"
                  name="cert-pg-13"
                  type="checkbox"
                />
              </div>
              <div className="ml-2 text-xs leading-6 sm:ml-3 sm:text-sm">
                <label
                  className="font-medium text-gray-900"
                  htmlFor="cert-pg-13"
                >
                  PG-13
                </label>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
                  id="cert-r"
                  name="cert-r"
                  type="checkbox"
                />
              </div>
              <div className="ml-2 text-xs leading-6 sm:ml-3 sm:text-sm">
                <label className="font-medium text-gray-900" htmlFor="cert-r">
                  R
                </label>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
                  id="cert-nr"
                  name="cert-nr"
                  type="checkbox"
                />
              </div>
              <div className="ml-2 text-xs leading-6 sm:ml-3 sm:text-sm">
                <label className="font-medium text-gray-900" htmlFor="cert-nr">
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
