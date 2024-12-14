import React from 'react';

export default function calendar() {
  const days: number[] = Array.from({ length: 35 }, (_, index) => index + 1);
  return (
    <div className="flex justify-center items-center h-screen bg-neutral-900">
      {' '}
      {/*Parent container to control margin spacing*/}
      <div className="grid grid-cols-7 grid-rows-5 w-[97vw] h-[95vh]">
        {/*Grid container*/}
        {days.map((day: number) => (
          <div
            key={day}
            className="flex flex-col items-center justify-center border border-amber-800"
          >
            {/*Grid cells*/}
            <h2>Day {day}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
