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
                  <p className="text-lg">{store['충전소명']}</p>
                  <div className="font-semibold">{store['시설구분(소)']}</div>
                  <div className="text-sm">{store['주소']}</div>
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
