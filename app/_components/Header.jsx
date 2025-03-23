import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className='p-5 shadow-sm flex items-center justify-between'>
            <div className='flex items-center gap-6 '>
                <Image src='/logoipsum-243.svg' alt='logo' width={180} height={100} />
                <div className='md:flex gap-6 items-center hidden'>
                    <h2 className='hover:scale-105 hover:text-blue-900 cursor-pointer'>Home</h2>
                    <h2 className='hover:scale-105 hover:text-blue-900 cursor-pointer'>Services</h2>
                    <h2 className='hover:scale-105 hover:text-blue-900 cursor-pointer'>About Us</h2>
                </div>

            </div>
            <div>
                <Button variant='primary'>Get Started</Button>
            </div>

        </div>

    )
}

export default Header