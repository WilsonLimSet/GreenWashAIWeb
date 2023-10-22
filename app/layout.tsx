import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Green',
  description: 'Compliance Tool',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
