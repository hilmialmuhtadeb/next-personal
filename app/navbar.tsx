import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='fixed rounded-full backdrop-blur shadow-2xl font-medium fixed-x-center my-4'>
        <ul className='flex w-96 justify-evenly font-[family-name:var(--font-geist-sans)]'>
            <li className='py-2'>
                <Link className='px-4 py-2' href="/">Home</Link>
            </li>
            <li className='py-2'>
                <Link className='px-4 py-2' href="/post">Post</Link>
            </li>
            <li className='py-2'>
                <Link className='px-4 py-2' href="/gallery">Gallery</Link>
            </li>
        </ul>
    </div>
  )
}
