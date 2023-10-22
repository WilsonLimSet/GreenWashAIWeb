import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Green',
  description: 'LLM-powered FTC compliance tool for marketing material',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌲</text></svg>"
        />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
