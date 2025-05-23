import Image from 'next/image'
import React from 'react'

function BusinessDescription({ business }) {
    return business?.name && (
        <div>
            <h2 className='font-bold text-[25px]'>Description</h2>
            <p className='text-lg text-gray-600 mt-4'>{business.about}</p>
            <h2 className='font-bold text-[25px] mt-8'>Gallery</h2>


            <div className='grid gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
                {business?.images?.map((item, index) => {

                    return (
                        <Image
                            src={item?.url}
                            key={index}
                            alt='image'
                            width={700}
                            height={200}
                            className='rounded-lg'

                        />
                    )
                })}
            </div>


        </div>
    )
}

export default BusinessDescription