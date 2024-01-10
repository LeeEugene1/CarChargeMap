'use client';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { RecoilRoot } from 'recoil';

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
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
};
