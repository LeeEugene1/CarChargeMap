'use client';
import Map from '@/components/Map';
import Markers from '@/components/Markers';
import { useEffect, useState } from 'react';

export default function Home() {
  const [map, setMap] = useState(null);
  const [data, setData] = useState(null);
  return (
    <>
      <Map setMap={setMap} />
      <Markers map={map} />
    </>
  );
}
