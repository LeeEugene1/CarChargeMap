"use client";
import Script from 'next/script';

declare global {
    interface Window {
        kakao: any;
    }
}

const DEFAULT_LAT = 37.497625203;
const DEFAULT_LNG = 127.03088379;

export default function Home() {
    const onLoadFunc = async () => {
      const {result} = await fetch('/store').then((e) => e.json());
      console.log(result);

      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div
          mapOption = {
            center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
        // marker.setMap(null);

      });
    }
  return (
    <>
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP}&autoload=false`}
        onLoad={()=>onLoadFunc()}
      ></Script>
      <div id="map" className="w-full h-screen"></div>
    </>
  );
}
