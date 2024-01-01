import React, { useEffect } from 'react';
interface MarkerProps {
  map: any;
}
// const DEFAULT_LAT = 37.497625203;
// const DEFAULT_LNG = 127.03088379;
export default function Markers({ map }: MarkerProps) {
  const onLoadMarkers = async () => {
    const { result } = await fetch('/store').then((e) => e.json());
    result.data?.map((e) => {
      // 마커가 표시될 위치입니다
      const markerPosition = new window.kakao.maps.LatLng(e.y, e.x);

      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      // 커스텀 오버레이가 표시될 위치입니다
      const position = new window.kakao.maps.LatLng(e.y, e.x);
      const content = '<div class ="infowindow">카카오!!!!!!</div>';

      // 커스텀 오버레이를 생성합니다
      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: position,
        content: content,
        xAnchor: 0.5,
        yAnchor: 2.8,
      });

      window.kakao.maps.event.addListener(marker, 'mouseover', () => {
        customOverlay.setMap(map);
      });

      window.kakao.maps.event.addListener(marker, 'mouseout', () => {
        customOverlay.setMap(null);
      });
    });
  };
  useEffect(() => {
    if (map) {
      onLoadMarkers();
    }
  }, [map]);
  return <></>;
}
