'use client';

import Script from 'next/script';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentStoreState, locationState, mapState } from '@/atom';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  lat: number | string;
  lng: number | string;
}

export default function Map() {
  const store = useRecoilValue(currentStoreState);
  const setMap = useSetRecoilState(mapState);
  const location = useRecoilValue(locationState);
  // if (store) {
  //   console.log('st', store.x, store.y);
  // }
  const onLoadFunc = async () => {
    window.kakao.maps.load(function () {
      const mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
          center: new window.kakao.maps.LatLng(
            store ? store.x : location.lat,
            store ? store.y : location.lng
          ), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
      // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
      const map = new window.kakao.maps.Map(mapContainer, mapOption);
      setMap(map);
    });
  };
  return (
    <>
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP}&autoload=false`}
        onLoad={() => onLoadFunc()}
      ></Script>
      <div id="map" className="w-full h-screen"></div>
    </>
  );
}
