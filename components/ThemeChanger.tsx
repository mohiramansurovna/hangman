'use client';
import {useTheme} from 'next-themes';
import { useEffect } from 'react';
import {HiSun, HiMoon} from 'react-icons/hi';

export default function ThemeChanger() {
    const {theme, setTheme} = useTheme();

    return (
        <div>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='animate-spinmine'>
                {theme === 'dark' ? <HiSun size={25}/> : <HiMoon size={25}/>}
            </button>
        </div>
    );
}
