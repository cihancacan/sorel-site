import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SOREL — Photo & Film',
  description: 'SOREL, maison photo & film haut de gamme. Revoyez l\'instant comme vous l\'avez vécu.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
