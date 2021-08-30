import type { AppProps } from 'next/app';
import { StoreProvider, rootStore } from '../stores/rootStore';
import 'tailwindcss/tailwind.css';
import { TailwindHelper } from '../components/TailwindHelper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider value={rootStore}>
      <Component {...pageProps} />
      <TailwindHelper />
    </StoreProvider>
  );
}

export default MyApp;
