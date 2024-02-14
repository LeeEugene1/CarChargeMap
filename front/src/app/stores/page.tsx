'use client';
import Loading from '@/components/Loading';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function page() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () =>
      await axios(`${process.env.NEXT_PUBLIC_SERVER}/api/stores`),
  });
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        'Error'
      ) : (
        data?.data.map((item: any) => {
          return (
            <div key={item.id}>
              [{item.id}]{item.addr}
            </div>
          );
        })
      )}
    </div>
  );
}
