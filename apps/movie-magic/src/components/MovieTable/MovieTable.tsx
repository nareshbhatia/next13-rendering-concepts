import type { Movie } from '@/models';

export interface MovieTableProps {
  movies: Movie[];
}

export function MovieTable({ movies }: MovieTableProps) {
  return (
    <table className="w-full border-collapse border-spacing-0 border-none text-left [&_td]:py-3 [&_th]:px-1 [&_th]:py-3">
      <thead className="border-b-2 border-gray-300">
        <tr>
          <th className="text-center">Rank</th>
          <th>Name</th>
          <th className="text-center">Year</th>
          <th className="text-center">Rating</th>
        </tr>
      </thead>
      <tbody className="[&>tr:nth-child(even)]:bg-gray-100">
        {movies.map((movie, index) => (
          <tr key={movie.id}>
            <td className="text-center">{index + 1}</td>
            <td>{movie.name}</td>
            <td className="text-center">{movie.year}</td>
            <td className="text-center">{movie.rating.toFixed(1)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
