import Image from 'next/image'
import React from 'react'

function CategoryList({ categoryList }) {
    return (
        <div className='mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {categoryList?.map((category, index) => (
                <div key={index} className='flex flex-col items-center justify-center gap-2 p-5 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out' style={{ backgroundColor: category.bgcolor.hex }}>
                    <Image src={category.icon.url} alt='icon' width={35} height={35} />
                    <h2>{category.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default CategoryList
