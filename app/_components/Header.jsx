"use client"
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,


} from '@/components/ui/dropdown-menu'
import Link from 'next/link'


function Header() {


    const { data } = useSession();

    useEffect(() => {
        console.log(data);
    }, [data])


    return (
        <div className='p-5 shadow-sm flex items-center justify-between'>
            <div className='flex items-center gap-6 '>
                <Image src='/ServeEasyLogo.svg' alt='logo' width={180} height={100} />
                <div className='md:flex gap-6 items-center hidden'>
                    <Link href={'/'} className='hover:scale-105 hover:text-blue-900 cursor-pointer'>Home</Link>
                    <h2 className='hover:scale-105 hover:text-blue-900 cursor-pointer'>Services</h2>
                    <h2 className='hover:scale-105 hover:text-blue-900 cursor-pointer'>About Us</h2>
                </div>
            </div>
            <div>


                {data?.user ?


                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Image src={data?.user?.image}
                                alt='user'
                                width={40}
                                height={40}
                                className='rounded-full' />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Welcome, {data?.user?.name}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href={'/myBooking'}>  My Bookings </Link>

                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => { signOut() }}>Log Out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>


                    :

                    <Button
                        onClick={() => signIn("descope")}
                        variant='primary'>
                        Login / Sign Up
                    </Button>

                }


            </div>
        </div>
    )
}

export default Header
