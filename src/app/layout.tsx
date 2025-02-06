import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NextJs Starter Teplate',
  description:
    'A Next.js starter template with TypeScript, Tailwind CSS, ESLint, Husky, Turbopack, and pre-commit hooks',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
