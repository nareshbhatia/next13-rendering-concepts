import { Footer } from '@/components/Footer';
import { MovieTable } from '@/components/MovieTable';
import { Title } from '@/components/Title';
import type { Movie } from '@/models';

interface SearchParams {
  q?: string;
  cert?: string[] | string;
}

async function getMovies({ q, cert }: SearchParams): Promise<Movie[]> {
  // create searchParamsString
  const urlSearchParams = new URLSearchParams();
  if (q !== undefined) urlSearchParams.append('q', q);
  if (cert !== undefined) {
    if (typeof cert === 'string') {
      urlSearchParams.append('cert', cert);
    } else {
      cert.forEach((certString) => {
        urlSearchParams.append('cert', certString);
      });
    }
  }
  const searchParamsString = urlSearchParams.toString();

  // call the api
  const { API_URL } = process.env;
  const url = `${API_URL}/movies?${searchParamsString}`;
  console.log('----> HTTP GET', url);
  // ----- No Cached Data -----
  const resMovies = await fetch(url, { cache: 'no-store' });
  return resMovies.json() as Promise<Movie[]>;
}

export interface ServerComponent5Props {
  searchParams: SearchParams;
}

/**
 * Dynamic function: searchParams
 * No cached data
 * Hence dynamically rendered
 * TODO: Calls API only once, then on, seems to be caching results
 */
export default async function ServerComponent5({
  searchParams,
}: ServerComponent5Props) {
  console.log('----> Rendering ServerComponent5');
  console.log('----> searchParams', searchParams);
  const movies = await getMovies(searchParams);
  return (
    <div className="p-8">
      <Title>Server Component 5</Title>
      <MovieTable movies={movies} />
      <Footer />
    </div>
  );
}
