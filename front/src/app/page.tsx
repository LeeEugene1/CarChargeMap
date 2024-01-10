import Map from '@/components/Map';
import Markers from '@/components/Markers';
import StoreBox from '@/components/StoreBox';

export default async function Home() {
  return (
    <>
      <Map />
      <Markers />
      <StoreBox />
    </>
  );
}
