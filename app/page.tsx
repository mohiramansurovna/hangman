import Link from 'next/link';

export default function page() {

    return (
        <main className='absolute-center w-full font-dotted uppercase flex flex-col gap-12 text-5xl text-blue-500 font-semibold items-center justify-center min-h-screen py-2'>
            <p className='text-blue-700'>Hi <span className='text-blue-300'>there</span> </p>
            <h1>Welcome <span className='text-blue-300'>to</span> <span className='text-blue-800'>hangman</span></h1>
            <Link href='/question' className='hover:bg-blue-700 hover:text-white border-2 border-dashed border-blue-700 rounded-2xl  p-4 pt-6 text-blue-700'>create questions and share it to your friends</Link>
            <p className='text-blue-300 my-0'>or</p>
            <Link href='/play' className='hover:bg-blue-500 hover:text-white border-2 border-dashed border-blue-500 rounded-2xl  p-4 pt-6 text-blue-500'>play with our questions</Link>
        </main>
    );
}
