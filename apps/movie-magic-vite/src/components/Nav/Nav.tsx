import { CertCheckbox } from './CertCheckbox';
import { QuerySelector } from './QuerySelector';
import type { ChangeEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export function Nav() {
  const [searchParams, setSearchParams] = useSearchParams();
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

    // navigate
    console.log('----> set searchParams to', urlSearchParams.toString());
    setSearchParams(urlSearchParams);
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
          <Link className="text-sm text-sky-700 sm:text-lg" to="/">
            Home
          </Link>
        </li>
        <li>
          <QuerySelector onQueryChange={handleQueryChange} q={q} />
        </li>
        <li>
          <div className="flex items-center space-x-3 sm:space-x-5">
            {['PG-13', 'R', 'NR'].map((c) => (
              <CertCheckbox
                checked={cert.includes(c)}
                id={c}
                key={c}
                onCertChange={handleCertChange}
              />
            ))}
          </div>
        </li>
      </ul>
    </nav>
  );
}
