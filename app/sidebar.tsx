import React from 'react'

export default function Sidebar() {
  return (
    <div className='fixed fixed-y-center w-64 font-[family-name:var(--font-geist-sans)]'>
        <ul>
            <li className='ml-24 py-2 text-xl font-semibold underline underline-offset-4'>Hilmi</li>
            <li className='ml-24 py-2'>Story</li>
            <li className='ml-24 py-2'>Experience</li>
        </ul>
    </div>
  )
}
