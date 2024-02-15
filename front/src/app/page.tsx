import CurrentLocationButton from '@/components/CurrentLocationButton';
import Map from '@/components/Map';
import Markers from '@/components/Markers';
import StoreBox from '@/components/StoreBox';
import axios from 'axios';

//ssr
async function getData() {
  try {
    const res = await axios(`${process.env.NEXT_PUBLIC_SERVER}/api/stores`);

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error('Failed to fetch data');
    // }

    return res;
  } catch (error) {
    console.log(error);
  }
}
export default async function Home() {
  const response = await getData();
  return (
    <>
      <Map />
      <Markers result={response?.data} />
      <StoreBox />
      <CurrentLocationButton />
    </>
  );
}
