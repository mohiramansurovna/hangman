import {getCategories} from '@/lib/categories';
import Link from 'next/link';
import React from 'react';

export default async function page() {
    const categories = (await getCategories()) as {category: string; id: string}[];

    return (
        <main className='absolute-center w-full font-dotted uppercase flex flex-col gap-12 text-5xl text-blue-500 font-semibold items-center justify-center min-h-screen py-2'>
            <h1>Our categories</h1>
            <div className='flex flex-wrap gap-4 justify-center items-center'>
                {categories.map((each, i) => (
                    <div
                        key={i}
                        className='hover:bg-blue-700 hover:text-white border-2 border-dashed border-blue-700 rounded-2xl  p-4 pt-6 text-blue-700'>
                        <Link
                            className=''
                            href={`answerboard/${each.id}`}>
                            {each.category}
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}
