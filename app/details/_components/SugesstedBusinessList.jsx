"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import { Button } from '@/components/ui/button'
import { NotebookPen } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import BookingSection from '@/app/details/_components/BookingSection';

function SugesstedBusinessList({ business }) {



    const [businessList, setBusinessList] = useState();

    useEffect(() => {
        business && getBusinessList();
    }, [business]);

    const getBusinessList = () => {
        GlobalApi.getBusinessByCategory(business?.category?.name)
            .then(resp => {
                setBusinessList(resp?.businessLists)
            })
    }





    return (
        <div className='md:pl-10'>

            <BookingSection business={business}>
                <Button variant='purple' className='flex gap-2 w-full'>
                    <NotebookPen />
                    Book Appointment
                </Button>
            </BookingSection>

            <div className='hidden md:block'>

                <h2 className='font-bold text-lg mt-3'>Similar Businesses</h2>

                <div>
                    {businessList && businessList.map((business, index) => {
                        return (
                            <Link key={business.id} href={'/details/' + business.id}>
                                <div className='flex gap-2 mt-3 mb-4 hover:border hover:shadow-md cursor-pointer border-purple-400 rounded-lg p-2 '>

                                    <div>
                                        <Image
                                            src={business?.images[0].url}
                                            alt={business.name}
                                            width={80}
                                            height={80}
                                            className='rounded-lg object-cover' />
                                    </div>


                                    <div>
                                        <h2 className='font-bold'>{business.name}</h2>
                                        <h2 className='text-purple-400'>{business.contactPerson}</h2>
                                        <h2 className='text-gray-400'>{business.address}</h2>
                                    </div>

                                </div>




                            </Link>

                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default SugesstedBusinessList