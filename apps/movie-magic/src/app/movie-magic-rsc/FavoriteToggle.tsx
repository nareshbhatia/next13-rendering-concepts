import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { revalidatePath } from 'next/cache';

export interface FavoriteToggleProps {
  movieId: string;
  checked: boolean;
}

export function FavoriteToggle({ movieId, checked }: FavoriteToggleProps) {
  async function updateFavorite(data: FormData) {
    'use server';
    const movieId = data.get('movieId') as string;
    const favorite = data.get('favorite');

    const { API_URL } = process.env;
    const url = `${API_URL}/movies/${movieId}`;
    console.log('----> HTTP PATCH', url, 'favorite =', favorite !== null);
    await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        favorite: favorite !== null,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    revalidatePath('/movie-magic-rsc');
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form action={updateFavorite}>
      <input id="movieId" name="movieId" type="hidden" value={movieId} />
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          className="peer sr-only"
          defaultChecked={checked}
          id="favorite"
          name="favorite"
          type="checkbox"
        />
        <HeartOutline className="peer block h-6 w-6 text-sky-500 peer-checked:hidden" />
        <HeartSolid className="peer hidden h-6 w-6 text-sky-500 peer-checked:block" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
