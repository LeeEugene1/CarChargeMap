'use client';

import { currentStoreState } from '@/atom';
import React, { Dispatch, SetStateAction } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export default function StoreBox() {
  const store = useRecoilValue(currentStoreState);
  const setStore = useSetRecoilState(currentStoreState);
  return (
    <div className="fixed transition ease-in-out delay-150 inset-x-0 mx-auto bottom-20 roundeed-lg shadow-lg max-w-sm md:max-w-xl z-10 w-full bg-white">
      {store && (
        <div>
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div className="flex gap-5 items-center">
                <div>
                  <h1 className="font-semibold">
                    {store.kakaoAddress
                      ? store.kakaoAddress.road_address.building_name
                      : ''}
                  </h1>
                  <h2 className="text-lg">
                    {store.kakaoAddress
                      ? store.kakaoAddress.address.address_name
                      : store.csNm}
                  </h2>
                  <p className="text-sm">{store.addr}</p>
                </div>
              </div>
              <button type="button" onClick={() => setStore(null)}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
          <button className="w-full bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 text-white py-3 font-semibold rounded-b-lg">
            상세보기
          </button>
        </div>
      )}
    </div>
  );
}
