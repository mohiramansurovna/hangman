import QuestionForm from '@/components/QuestionForm';
import React from 'react';

export default function page() {
    return (
        <main suppressHydrationWarning>
            <div className='*:fixed'>
            <svg
                viewBox='0 0 100 100'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    fill='transparent'
                    stroke='#ff657fc6'
                    d='M36,-45.2C45.8,-34.6,52.5,-22.5,54.2,-10C56,2.6,52.8,15.7,45.2,23.5C37.6,31.4,25.5,34,13.8,38.5C2.2,43,-9,49.2,-21.5,49.1C-34.1,48.9,-47.9,42.3,-57.7,30.7C-67.6,19.1,-73.4,2.6,-69.3,-10.8C-65.2,-24.1,-51.2,-34.2,-38,-44.1C-24.8,-54.1,-12.4,-63.9,0.3,-64.3C13.1,-64.7,26.1,-55.7,36,-45.2Z'
                    transform='translate(50 50)'
                    />
            </svg>
            <svg
                viewBox='0 0 120 120'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    fill='transparent'
                    stroke='#db65ffc6'
                    d='M36,-45.2C45.8,-34.6,52.5,-22.5,54.2,-10C56,2.6,52.8,15.7,45.2,23.5C37.6,31.4,25.5,34,13.8,38.5C2.2,43,-9,49.2,-21.5,49.1C-34.1,48.9,-47.9,42.3,-57.7,30.7C-67.6,19.1,-73.4,2.6,-69.3,-10.8C-65.2,-24.1,-51.2,-34.2,-38,-44.1C-24.8,-54.1,-12.4,-63.9,0.3,-64.3C13.1,-64.7,26.1,-55.7,36,-45.2Z'
                    transform='translate(60 60)'
                    />
            </svg>
            <svg
                viewBox='0 0 140 140'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    fill='transparent'
                    stroke='#659bffc6'
                    d='M36,-45.2C45.8,-34.6,52.5,-22.5,54.2,-10C56,2.6,52.8,15.7,45.2,23.5C37.6,31.4,25.5,34,13.8,38.5C2.2,43,-9,49.2,-21.5,49.1C-34.1,48.9,-47.9,42.3,-57.7,30.7C-67.6,19.1,-73.4,2.6,-69.3,-10.8C-65.2,-24.1,-51.2,-34.2,-38,-44.1C-24.8,-54.1,-12.4,-63.9,0.3,-64.3C13.1,-64.7,26.1,-55.7,36,-45.2Z'
                    transform='translate(70 70)'
                    />
            </svg>
            <svg
                viewBox='0 0 160 160'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    fill='transparent'
                    stroke='#77ff65c6'
                    d='M36,-45.2C45.8,-34.6,52.5,-22.5,54.2,-10C56,2.6,52.8,15.7,45.2,23.5C37.6,31.4,25.5,34,13.8,38.5C2.2,43,-9,49.2,-21.5,49.1C-34.1,48.9,-47.9,42.3,-57.7,30.7C-67.6,19.1,-73.4,2.6,-69.3,-10.8C-65.2,-24.1,-51.2,-34.2,-38,-44.1C-24.8,-54.1,-12.4,-63.9,0.3,-64.3C13.1,-64.7,26.1,-55.7,36,-45.2Z'
                    transform='translate(80 80)'
                    />
            </svg>
            <svg
                viewBox='0 0 200 200'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    fill='transparent'
                    stroke='#fff565c5'
                    d='M36,-45.2C45.8,-34.6,52.5,-22.5,54.2,-10C56,2.6,52.8,15.7,45.2,23.5C37.6,31.4,25.5,34,13.8,38.5C2.2,43,-9,49.2,-21.5,49.1C-34.1,48.9,-47.9,42.3,-57.7,30.7C-67.6,19.1,-73.4,2.6,-69.3,-10.8C-65.2,-24.1,-51.2,-34.2,-38,-44.1C-24.8,-54.1,-12.4,-63.9,0.3,-64.3C13.1,-64.7,26.1,-55.7,36,-45.2Z'
                    transform='translate(100 100)'
                    />
            </svg>
            </div>
            <div className='w-full px-12 md:px-96 py-14 absolute-center bg-[#ffffffcc] dark:bg-[#000000cc] '>
                <QuestionForm />
            </div>
        </main>
    );
}
