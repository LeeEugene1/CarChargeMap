'use client';
import { mapState } from '@/atom';
import React, { useState } from 'react';
import { MdOutlineMyLocation } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import toast from 'react-hot-toast';

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
            toast.success('현재 위치로 이동하였습니다.');
          }
          return currentPosition;
        },
        (error) => {
          console.log(error);
          setLoading(false);
          toast.error('현재 위치를 가져올 수 없습니다.');
        },
        option
      );
    }
  };
  return (
    <>
      {loading ? (
        <div className="fixed w-full top-0 inset-x-0 h-screen flex flex-col justify-center bg-white/60 z-50">
          <div className="animate-spin w-10 h-10 text-blue-400 rounded-full border-[4px] m-auto border-t-transparent border-current"></div>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleCurrentPosition}
          className="fixed z-10 p-2 shadow right-5 bottom-20 bg-white rounded-md hover:shadow-lg hover:bg-gray-300 focus:shadow-lg"
        >
          <MdOutlineMyLocation className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
