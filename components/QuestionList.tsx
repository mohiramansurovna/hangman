'use client';
import {Questions, Question} from '@prisma/client';
import React, {useEffect, useState} from 'react';
import {Button} from './ui/button';
import {GrPrevious} from 'react-icons/gr';
import Hangman from './Hangman';
import Answer from './Answer';

type QuestionList = Questions & {
    questions: Question[];
};

export default function QuestionList({
    questions,
    svgData,
    winSvg,
}: {
    questions: QuestionList;
    svgData: React.ReactNode;
    winSvg: React.ReactNode;
}) {
    const [index, setIndex] = useState(0);
    const [mistake, setMistake] = useState(0);
    const [win, setWin] = useState(false);
    const [isWinner, setIsWinner] = useState(0);
    useEffect(() => {
        if (isWinner == questions.questions.length) {
            return;
        }
        if (win) {
            setIndex((prev) => (prev + 1) % questions.questions.length);
            setIsWinner((prev) => prev + 1);
            setTimeout(() => {
                setWin(false);
            }, 1000);
        }
    }, [win]);
    return (
        <main className='flex flex-row justify-between items-center w-screen'>
            <Button
                className='border-2 border-dashed bg-transparent border-blue-500 hover:bg-blue-500 hover:text-white h-12 w-12 p-0 rounded-full text-blue-500 font-semibold pb-1 '
                onClick={() => setIndex((prev) => prev - 1)}
                disabled={index === 0}>
                <GrPrevious />
            </Button>
            {(win && isWinner!==questions.questions.length) &&  <div className='text-4xl absolute-center text-blue-500'>Next Question! </div>}
            <section className='flex flex-row justify-around items-center w-full'>
                <Answer
                    asker={questions.asker}
                    question={questions.questions[index]}
                    svgData={svgData}
                    setMistake={setMistake}
                    setWin={setWin}
                />
                <Hangman
                    mistake={mistake}
                    isWinner={isWinner == questions.questions.length}
                />
                {mistake > 5 && (
                    <div className='w-screen h-screen z-20 fixed'>
                        <img
                            src='https://www.onlygfx.com/wp-content/uploads/2017/03/bloody-frame-4-1024x1024.png'
                            alt='bro'
                            className='bg-down-animate'
                        />
                        <p className='absolute top-1/6 left-1/2 -translate-x-1/4 lacquer-regular text-9xl -rotate-30 text-red-700 z-30 stroke-1 stroke-red-950'>
                            Bro is dead!
                        </p>
                        <button
                            className='absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white py-2 px-6 rounded-xl animate-bounce'
                            onClick={() => {
                                setMistake(0);
                                setWin(false);
                                setIsWinner(0);
                                setIndex(0);
                            }}>
                            Restart
                        </button>
                    </div>
                )}
                {isWinner === questions.questions.length && (
                    <>
                        {winSvg}
                        <h1 className='absolute-center text-6xl barriecito-regular font-bold  text-yellow-400'>
                            You win, bro saved!
                        </h1>
                    </>
                )}
            </section>
            <Button
                className='border-2 border-dashed bg-transparent border-blue-500 hover:bg-blue-500 hover:text-white h-12 w-12 p-0 rounded-full text-blue-500 font-semibold pb-1 *:rotate-180'
                onClick={() => setIndex((prev) => prev + 1)}
                disabled={index === questions.questions.length - 1}>
                <GrPrevious />
            </Button>
        </main>
    );
}
