import Map from '@/components/Map';
import Markers from '@/components/Markers';
import StoreBox from '@/components/StoreBox';

//ssr
async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/stores`, {
      cache: 'no-store', //테스트중
    });

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export default async function Home() {
  const response = await getData();
  return (
    <>
      <Map />
      <Markers result={response} />
      <StoreBox />
    </>
  );
}
