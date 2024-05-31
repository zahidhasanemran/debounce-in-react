"use client"

import { ChangeEvent } from "react"

export default function Home() {

  function generateName(event: ChangeEvent<HTMLInputElement>) {
    console.log(event?.target?.value);
  }

  function generateDebouncedName(cb:(e: ChangeEvent<HTMLInputElement>) => void, time:number) {
    let timer:ReturnType<typeof setTimeout>;
    return function (e: ChangeEvent<HTMLInputElement>){
      clearTimeout(timer);
      timer = setTimeout(()=> cb(e), time);
    }
  }

  return (
    <div className="">
      <div className="">
        <div className="">
          <input className="border m-16 w-1/2 p-4 border-black rounded-xl text-xl " type="text" onChange={generateDebouncedName(generateName, 1000)} />
        </div>
      </div>
    </div>
  );
}
