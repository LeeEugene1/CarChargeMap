import React from 'react';

export default function Loading() {
  return (
    <>
      <div className="w-full h-20 animate-purse bg-gray-200 rounded-md"></div>
      {[...Array(10)].map((e, i) => (
        <div
          key={i}
          className="w-full h-20 animate-pulse bg-gray-200 rounded-md mt-2"
        ></div>
      ))}
    </>
  );
}
