'use client';
import {ReactNode, useState} from 'react';
import {Question} from '@prisma/client';
import Answer from './Answer';
import Hangman from './Hangman';
import Image from 'next/image';

export default function GamePart({
    question,
    svgData,
}: {
    question: Question;
    svgData: ReactNode;
}) {
    const [mistake, setMistake]=useState(0);
    const [win, setWin]=useState(false);
  return (
    <main className='flex flex-row justify-around items-center'>
      <Answer question={question} svgData={svgData} setMistake={setMistake} setWin={setWin}/>
      <Hangman mistake={mistake} isWinner={win}/>
      {mistake>5 && 
      <div className='w-screen h-screen z-20 fixed'>
            <img src='https://www.onlygfx.com/wp-content/uploads/2017/03/bloody-frame-4-1024x1024.png' alt='bro' className='bg-down-animate'/>
          <p className="absolute top-1/6 left-1/2 -translate-x-1/4 lacquer-regular text-9xl -rotate-30 text-red-700 z-30 stroke-1 stroke-red-950">Bro is dead!</p>
          <button className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white py-2 px-6 rounded-xl animate-bounce" onClick={()=>setMistake(0)}>Restart</button>
        </div>
        }
    </main>
  )
}
