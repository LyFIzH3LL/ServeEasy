import { Button } from '@/components/ui/button'
import { Clock, Mail, MapPin, Share, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BusinessInfo({ business }) {
    return business?.name && (
        <div className='md:flex gap-4 items-center'>

            <Image src={business?.images[0]?.url}
                alt={business?.name}
                width={150}
                height={200}
                className='rounded-full h-[150px] object-cover'
            />

            <div className='flex justify-between items-center w-full'>

                <div className='flex flex-col mt-4 md:mt-0 items-baseline gap-3'>
                    <h2 className='text-purple-400 bg-purple-100 rounded-full p-1 px-3 text-lg'>{business?.category?.name}</h2>
                    <h2 className='text-[40px] font-bold'>{business.name}</h2>
                    <h2 className='flex gap-2 text-lg text-gray-500'><MapPin />{business.address}</h2>
                    <h2 className='flex gap-2 text-lg text-gray-500'><Mail />{business?.email}</h2>
                </div>
                <div className='flex flex-col gap-5 items-end'>
                    <Button variant='purple'><Share /></Button>
                    <h2 className='flex gap-2 text-xl text-purple-400'><User />{business.contactPerson}</h2>
                    <h2 className='flex gap-2 text-xl text-gray-500'><Clock />Available 8:00 AM to 10:00PM</h2>
                </div>
            </div>

        </div>
    )
}

export default BusinessInfo