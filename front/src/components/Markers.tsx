'use client';
import { currentStoreState, mapState } from '@/atom';
import React, { useEffect, Dispatch, SetStateAction, useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export default function Markers() {
  const map = useRecoilValue(mapState);
  const setCurrentStore = useSetRecoilState(currentStoreState);

  const onLoadMarkers = useCallback(async () => {
    const { result } = await fetch('/store').then((e) => e.json());
    result.data?.map((store: any) => {
      // 마커가 표시될 위치입니다
      const markerPosition = new window.kakao.maps.LatLng(store.y, store.x);

      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      // 커스텀 오버레이가 표시될 위치입니다
      const position = new window.kakao.maps.LatLng(store.y, store.x);
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

      window.kakao.maps.event.addListener(marker, 'click', () => {
        setCurrentStore(store);
      });
    });
  }, [map, setCurrentStore]);
  useEffect(() => {
    if (map) {
      onLoadMarkers();
    }
  }, [onLoadMarkers, map]);
  return <></>;
}
