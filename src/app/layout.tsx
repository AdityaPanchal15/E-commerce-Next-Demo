import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import theme from '../../config/theme';
import BaseLayout from './components/BaseLayout';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import BaseSpeedDial from './components/BaseSpeedDial';
import { ReduxProvider } from './redux/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ReduxProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BaseLayout />
            <Container maxWidth="xl" sx={{ mt: 1 }}>
              {children}
            </Container>
            <BaseSpeedDial />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
