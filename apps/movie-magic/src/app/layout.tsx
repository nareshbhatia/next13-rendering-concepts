import { Inter } from 'next/font/google';
import './tailwind.css';

/*
 * Load the Inter font using next/font/google. For details, see
 * https://beta.nextjs.org/docs/optimizing/fonts
 */
const inter = Inter({ subsets: ['latin'], variable: '--font-family-sans' });

/*
 * Adding this metadata with cause jest to fail when collecting coverage
 * See https://github.com/vercel/next.js/issues/47299
 */
export const metadata = {
  title: 'Movie Magic',
  description: 'Movie Magic',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={inter.variable} lang="en">
      <body>{children}</body>
    </html>
  );
}
