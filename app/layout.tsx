import React, { type PropsWithChildren } from 'react';

import { ThemeProvider } from './theme';

import '@/styles/reset.css';
import '@/styles/flexboxgrid.min.css';

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
