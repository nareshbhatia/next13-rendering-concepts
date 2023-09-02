import { useRefreshContext } from './RefreshContextProvider';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

export interface FavoriteToggleProps {
  movieId: string;
  checked: boolean;
}

export function FavoriteToggle({ movieId, checked }: FavoriteToggleProps) {
  const { refreshCount, setRefreshCount } = useRefreshContext();

  const handleChange = async () => {
    const API_URL = import.meta.env.VITE_API_URL as string;
    const url = `${API_URL}/movies/${movieId}`;
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

    // Refetch data
    console.log(`----> setRefreshCount(${refreshCount + 1})`);
    setRefreshCount(refreshCount + 1);
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
