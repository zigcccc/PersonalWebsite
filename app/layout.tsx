import { Metadata } from 'next';
import { type PropsWithChildren } from 'react';

import { ThemeProvider } from './theme';

import '@/styles/reset.css';
import '@/styles/flexboxgrid.min.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zigakrasovec.com'),
  title: {
    default: 'Žiga Krašovec :: Frontend Web Developer',
    template: '%s :: Žiga Krašovec',
  },
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
