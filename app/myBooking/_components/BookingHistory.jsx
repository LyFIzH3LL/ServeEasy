import { Calendar, Clock, MapPin, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BookingHistory({ bookingHistory = [], type }) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            {bookingHistory.length === 0 ? (
                <p>No bookings found.</p>
            ) : (
                bookingHistory.map((booking, index) => (
                    <div key={index} className='flex gap-4 border rounded-lg p-4 mb-5'>
                        {booking?.businessList?.name && (
                            <Image
                                src={booking?.businessList?.images?.[0]?.url || '/default-image.jpg'}
                                alt='images'
                                width={150}
                                height={150}
                                className='rounded-lg object-cover'
                            />
                        )}
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-bold'>{booking?.businessList?.name}</h2>
                            <h2 className='flex gap-2 text-purple-500'><User />{booking?.businessList?.contactPerson}</h2>
                            <h2 className='flex gap-2 text-gray-500'><MapPin className='text-purple-500' />{booking?.businessList?.address}</h2>
                            <h2 className='flex gap-2 text-gray-500'>
                                <Calendar className='text-purple-500' />
                                Service on : <span className='text-black'>{booking?.date}</span>
                            </h2>
                            <h2 className='flex gap-2 text-gray-500'>
                                <Clock className='text-purple-500' />
                                Time : <span className='text-black'>{booking?.date}</span>
                            </h2>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}


export default BookingHistory