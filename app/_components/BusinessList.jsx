import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

function BusinessList({ BusinessLists, title }) {
    return (
        <div className='mt-5'>
            <h2 className='font-bold text-[22px]'>{title}</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5'>
                {BusinessLists.length > 0 ? BusinessLists.map((business, index) => (
                    <div key={index} className='shadow-md rounded-lg hover:shadow-lg hover:shadow-purple-400 cursor-pointer hover:scale-105 transition-all ease-in-out'>
                        {business?.images?.[0]?.url && (
                            <Image
                                src={business.images[0].url}
                                alt={business.name}
                                width={500}
                                height={200}
                                className='h-[150px] md:h-[200px] object-cover rounded-lg'
                            />
                        )}
                        <div className='flex flex-col items-baseline p-3'>
                            <h2 className='p-1 bg-purple-200 text-purple-400 rounded-full px-2 text-[12px]'>{business.category.name}</h2>
                            <h2 className='font-bold text-lg'>{business.name}</h2>
                            <h2 className='text-purple-400'>{business.contactPerson}</h2>
                            <h2 className='text-gray-500 text-sm'>{business.address}</h2>
                            <Button variant='purple'>Book Now</Button>
                        </div>
                    </div>
                ))
                    :
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                        return (
                            <div key={index} className='w-full h-[300px] bg-slate-200 rounded-lg animate-pulse'></div>
                        );
                    })
                }

            </div>
        </div>
    );
}

export default BusinessList;
