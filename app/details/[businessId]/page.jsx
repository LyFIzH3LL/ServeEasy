"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import { signIn, useSession } from 'next-auth/react'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import BusinessInfo from '@/app/details/_components/BusinessInfo';
import BusinessDescription from '@/app/details/_components/BusinessDescription';
import SuggestedBusinessList from '@/app/details/_components/SugesstedBusinessList';

function BusinessDetail() {



    const { data, status } = useSession();
    const params = useParams();
    const businessId = params?.businessId;
    const [business, setBusiness] = useState([]);


    useEffect(() => {

        checkUserAuth();

    })

    const checkUserAuth = () => {


        if (status == 'loading') {
            <p>Loading...</p>
        }

        if (status == 'unauthenticated') {
            signIn('descope');
        }

    }


    useEffect(() => {
        if (businessId) {
            GlobalApi.getBusinessById(businessId)
                .then((resp) => {
                    console.log(resp);
                    setBusiness(resp.businessList);
                })
        }
    }, [businessId])


    return status == 'authenticated' && (
        <div className='py-8 md:py-20 px-10 md:px-36'>

            <BusinessInfo business={business} />

            <div className='grid grid-cols-3 mt-16'>
                <div className='col-span-3 md:col-span-2 order-last md:order-first'>
                    <BusinessDescription business={business} />
                </div>
                <div>
                    <SuggestedBusinessList business={business} />
                </div>
            </div>

        </div>
    )
}

export default BusinessDetail