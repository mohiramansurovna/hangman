import React from 'react';
export default function Background() {
    return (
        <div className='fixed top-0 left-0 w-full h-full pointer-events-none'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'>
                <defs>
                    <pattern
                        id='grid'
                        width='30'
                        height='30'
                        patternUnits='userSpaceOnUse'>
                        <path
                            d='M 30 0 L 0 0 0 30'
                            fill='none'
                            stroke='blue'
                            strokeWidth='0.5'
                            opacity='0.3'
                        />
                    </pattern>
                </defs>
                <rect
                    width='100%'
                    height='100%'
                    fill='url(#grid)'
                />
            </svg>
        </div>
    );
}
