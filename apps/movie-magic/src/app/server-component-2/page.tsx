import { Footer } from '@/components/Footer';
import { MovieTable } from '@/components/MovieTable';
import { Title } from '@/components/Title';
import type { Movie } from '@/models';

async function getMovies(): Promise<Movie[]> {
  const { API_URL } = process.env;
  console.log('----> API_URL', API_URL);
  const resMovies = await fetch(`${API_URL}/top-10-movies`);
  return resMovies.json() as Promise<Movie[]>;
}

export default async function ServerComponent2() {
  console.log('----> Rendering ServerComponent2');
  const movies = await getMovies();
  return (
    <div className="p-8">
      <Title>Server Component 2</Title>
      <MovieTable movies={movies} />
      <Footer />
    </div>
  );
}
