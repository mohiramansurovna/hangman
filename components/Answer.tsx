'use client';
import {Dispatch, ReactNode, SetStateAction, useState} from 'react';
import {Question} from '@prisma/client';

export default function Answer({
    question,
    svgData,
    setMistake,
    setWin
}: {
    question: Question;
    svgData: ReactNode;
    setMistake:Dispatch<SetStateAction<number>>;
    setWin:Dispatch<SetStateAction<boolean>>;
}) {
    const [result, setResult] = useState<boolean[]>(new Array(question.answer.length).fill(false));
    const buttons = 'qwertyuiopasdfghjklzxcvbnm'.split('');

    const checkAnswer = (letter: string) => {
        const answer = question.answer.split('');
        const newResult = [...result];
        let checker = true;
        for (let i = 0; i < answer.length; i++) {
            if (newResult[i]) continue;
            if (answer[i] === letter) {
                newResult[i] = true;
                continue;
            }
            if (answer[i] === ' ') {
                newResult[i] = true;
                continue;
            }
            checker = false;
        }
        if (answer.includes(letter) === false) setMistake((prev)=>prev+1);
        setResult(newResult);
        if (checker) setWin(true);
    };

    return (
       
            <section className='w-1/2 h-screen flex flex-col justify-around items-center'>
                <div>
                    <h2 className='text-xl text-blue-500 font-semibold'>{question.asker} asks...</h2>
                    <h1 className='text-2xl '>"{question.question}"</h1>
                </div>
                <div className='flex flex-row gap-1 my-0'>
                    {question.answer.split('').map((letter, i) =>
                        letter == ' ' ? (
                            <div className='w-8 h-8' key={i}></div>
                        ) : (
                            <span
                                key={i}
                                className='w-8 h-8 text-3xl place-items-center'>
                                {result[i] ? letter : svgData}
                            </span>
                        )
                    )}
                </div>

                <div className='text-center'>
                    {buttons.map((button, i) => (
                        <span key={i}>
                            {i === 10 || i === 19 ? <br /> : null}
                            <button
                                className='border border-dashed border-blue-500 text-blue-500 font-semibold text-2xl px-3 py-1 m-2 rounded-md hover:bg-blue-500 hover:text-white'
                                onClick={() => checkAnswer(button)}>
                                {button}
                            </button>
                        </span>
                    ))}
                </div>
            </section>
    );
}
