'use client';
import Map from '@/components/Map';
import Markers from '@/components/Markers';
import { useState } from 'react';

export default function Home() {
  const [map, setMap] = useState(null);
  return (
    <>
      <Map setMap={setMap} />
      <Markers map={map} />
    </>
  );
}
