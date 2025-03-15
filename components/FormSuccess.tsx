import React from 'react';

export default function FormSuccess(success: string) {
    return (
        <div
            className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative'
            role='alert'>
            <p>{success}</p>
        </div>
    );
}
