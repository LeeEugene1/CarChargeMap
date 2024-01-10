import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextProvider, NextLayout } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '피카, 전기차 충전소맵',
  description: '공공데이터와 유저가 참여하는 전기차 충전소 지도앱',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextProvider>
          <NextLayout>{children}</NextLayout>
        </NextProvider>
      </body>
    </html>
  );
}
