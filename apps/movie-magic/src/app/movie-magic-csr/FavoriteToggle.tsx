import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

export interface FavoriteToggleProps {
  movieId: string;
  checked: boolean;
}

export function FavoriteToggle({ movieId, checked }: FavoriteToggleProps) {
  const router = useRouter();

  const handleChange = async () => {
    // eslint-disable-next-line prefer-destructuring
    const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
    const url = `${NEXT_PUBLIC_API_URL}/movies/${movieId}`;
    console.log('----> HTTP PATCH', url, 'favorite =', !checked);
    await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        favorite: !checked,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    console.log('----> router.refresh()');
    router.refresh();
  };

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        className="peer sr-only"
        defaultChecked={checked}
        id="favorite"
        name="favorite"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onChange={handleChange}
        type="checkbox"
      />
      <HeartOutline className="peer block h-6 w-6 text-sky-500 peer-checked:hidden" />
      <HeartSolid className="peer hidden h-6 w-6 text-sky-500 peer-checked:block" />
    </label>
  );
}
