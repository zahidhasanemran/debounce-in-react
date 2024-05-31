"use client"

import { futimesSync } from "fs"

export default function Home() {

  function generateName() {
    console.log("hi bro");
  }

  function generateDebouncedName(cb, time) {
    let timer;
    return function (){
      clearTimeout(timer);
      timer = setTimeout(cb, time);
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
