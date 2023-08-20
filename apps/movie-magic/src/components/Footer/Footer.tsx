import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-8">
      <Link className="text-sky-700 underline" href="/">
        Home
      </Link>
    </footer>
  );
}
