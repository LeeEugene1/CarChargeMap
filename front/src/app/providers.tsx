'use client';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { RecoilRoot } from 'recoil';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

interface Props {
  children?: React.ReactNode;
}

export const NextProvider = ({ children }: Props) => {
  return (
    <>
      <RecoilRoot>{children}</RecoilRoot>
    </>
  );
};

export const NextLayout = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="layout">
        <Navbar />
        {children}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
