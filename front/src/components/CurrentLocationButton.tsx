'use client';
import { mapState } from '@/atom';
import React, { useState } from 'react';
import { MdOutlineMyLocation } from 'react-icons/md';
import { useRecoilValue } from 'recoil';

export default function CurrentLocationButton() {
  const map = useRecoilValue(mapState);
  const [loading, setLoading] = useState<boolean>(false);
  const handleCurrentPosition = () => {
    setLoading(true);
    const option = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: Infinity, //cached
    };
    if (navigator.geolocation && map) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //성공케이스
          const currentPosition = new window.kakao.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          console.log(currentPosition);
          if (currentPosition) {
            setLoading(false);
            map.panTo(currentPosition);
          }
          return currentPosition;
        },
        (error) => {
          console.log(error);
          setLoading(false);
        },
        option
      );
    }
  };
  return (
    <button
      type="button"
      onClick={handleCurrentPosition}
      className="fixed z-10 p-2 shadow right-5 bottom-20 bg-white rounded-md hover:shadow-lg hover:bg-gray-300 focus:shadow-lg"
    >
      <MdOutlineMyLocation className="w-6 h-6" />
    </button>
  );
}
