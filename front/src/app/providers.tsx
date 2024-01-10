'use client';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';

interface Props {
  children?: React.ReactNode;
}

export const NextProvider = ({ children }: Props) => {
  return <>{children}</>;
};

export const NextLayout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
};
