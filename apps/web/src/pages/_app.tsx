import { useState } from 'react';
import { Roboto, Roboto_Mono } from 'next/font/google';
import '@/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

const roboto = Roboto({
  weight: ['700', '400', '500', '600', '800', '400', '300'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const robotoMono = Roboto_Mono({
  weight: ['700', '400', '500', '600', '400', '300'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${roboto.variable} ${robotoMono.variable}`}>
        <div className="font-main">
          <Component {...pageProps} />
        </div>
      </main>
    </QueryClientProvider>
  );
}
