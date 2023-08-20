import { Footer } from '@/components/Footer';
import { MovieTable } from '@/components/MovieTable';
import { Title } from '@/components/Title';
import type { Movie } from '@/models';

async function getMovies(searchParams: URLSearchParams): Promise<Movie[]> {
  const { API_URL } = process.env;
  const searchParamsString = new URLSearchParams(searchParams).toString();
  const url = `${API_URL}/movies?${searchParamsString}`;
  console.log('----> HTTP GET', url);
  const resMovies = await fetch(url);
  return resMovies.json() as Promise<Movie[]>;
}

export interface ServerComponent3Props {
  searchParams: URLSearchParams;
}

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
