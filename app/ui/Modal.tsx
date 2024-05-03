'use client';
import CreateLog from '../CreateLog/CreateLog';
export default function Modal({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/4 h-1/3 border-amber-800 border-solid border-4 rounded px-8 pt-1">
        <div className="w-full h-1/6 border-amber-800 border-solid border-b-2 flex items-center justify-center px-4">
          <h2 className="font-bold text-3xl font-mono">{title}</h2>
        </div>
        <div className="w-full h-5/6 pt-4 pb-10 px-2">
          <CreateLog />
        </div>
      </div>
    </div>
  );
}
