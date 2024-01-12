'use client';
import { currentStoreState, mapState } from '@/atom';
import React, { useEffect, Dispatch, SetStateAction, useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

interface dataProps {
  result: {
    items: {
      item: [
        {
          addr: string;
          chargeTp: number;
          cpId: number; // 811,
          cpNm: string; //"급속01",
          cpStat: number; //1,
          cpTp: number; //10,
          csId: number; //14,
          csNm: string; //"고척스카이돔",
          lat: number; // 37.565199,
          longi: number; //126.983339,
          statUpdateDatetime: string; //"2024-01-12 18:21:05"
        }
      ];
    };
    kakaoAddress: [any] | null;
  };
}

export default function Markers({ result }: dataProps) {
  const map = useRecoilValue(mapState);
  const setCurrentStore = useSetRecoilState(currentStoreState);

  const onLoadMarkers = useCallback(async () => {
    debugger;
    result.items?.item.map((store: any) => {
      // 마커가 표시될 위치입니다
      const markerPosition = new window.kakao.maps.LatLng(
        store.lat,
        store.longi
      );

      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      // 커스텀 오버레이가 표시될 위치입니다
      const position = new window.kakao.maps.LatLng(store.lat, store.longi);
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
