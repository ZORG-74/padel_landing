import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Padel Social Club',
  description: 'Motion. Discipline. Result.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}