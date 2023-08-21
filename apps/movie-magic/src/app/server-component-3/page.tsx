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
  // ----- Cached Data -----
  const resMovies = await fetch(url);
  return resMovies.json() as Promise<Movie[]>;
}

export interface ServerComponent3Props {
  searchParams: SearchParams;
}

/**
 * Dynamic function: searchParams
 * Cached Data
 * Hence dynamically rendered
 */
export default async function ServerComponent3({
  searchParams,
}: ServerComponent3Props) {
  console.log('----> Rendering ServerComponent3');
  console.log('----> searchParams', searchParams);
  const movies = await getMovies(searchParams);
  return (
    <div className="p-8">
      <Title>Server Component 3</Title>
      <MovieTable movies={movies} />
      <Footer />
    </div>
  );
}
