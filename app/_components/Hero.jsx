import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function Hero() {
    return (
        <div className='flex items-center justify-center flex-col pt-14 gap-3 pb-7'>
            <h2 className='font-bold text-[46px] text-center'>
                Find Home
                <span className='text-blue-800'> Service/Repair</span>
                <br />Near You
            </h2>
            <h2 className='text-xl text-gray-500'>
                Explore Home Service & Repair near you
            </h2>
            <div className='mt-4 flex gap-4 items-center'>
                <Input placeholder='Search' className="rounded-full md:w-[350px]" />
                <Button variant='primary' className='rounded-full h-[40px]'>
                    <Search className='h-4 w-4' />
                </Button>
            </div>
        </div>
    )
}

export default Hero