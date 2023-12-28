'use client';
import Script from 'next/script';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Home() {
  const handleClickMap = (e) => {
    debugger;
    console.log(e);
  };
  const onLoadFunc = async () => {
    const res = await fetch('/store').then((e) => e.json());
    console.log(res);
    window.kakao.maps.load(function () {
      const mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
      // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      // 커스텀 오버레이가 표시될 위치입니다
      const position = new window.kakao.maps.LatLng(33.450701, 126.570667);
      const content =
        '<div class ="label"><span class="left"></span><span class="center">카카오!</span><span class="right"></span></div>';

      // 커스텀 오버레이를 생성합니다
      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: position,
        content: content,
      });
      customOverlay.setMap(map);
    });
  };
  return (
    <>
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP}&autoload=false`}
        onLoad={() => onLoadFunc()}
      ></Script>
      <div
        id="map"
        className="w-full h-screen"
        onClick={(e) => handleClickMap(e)}
      ></div>
    </>
  );
}
