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
    const [business, setBusiness] = useState(null);

    useEffect(() => {
        checkUserAuth();
    }, [status]); // Watch for status changes

    const checkUserAuth = () => {
        if (status === 'loading') {
            return; // Handle loading state
        }

        if (status === 'unauthenticated') {
            signIn('descope'); // Trigger sign-in if not authenticated
        }
    }

    useEffect(() => {
        if (businessId) {
            GlobalApi.getBusinessById(businessId)
                .then((resp) => {
                    console.log("Business Response:", resp); // Log the full response to check the structure
                    setBusiness(resp?.businessList || null); // Access the businessList correctly
                })
                .catch((error) => {
                    console.error("Error fetching business data:", error);
                });
        }
    }, [businessId]); // Fetch business when businessId changes

    // Return early if business or session is not available
    if (status === 'loading') {
        return <p>Loading...</p>; // You can display a loading spinner or message here
    }

    if (status === 'unauthenticated') {
        return null; // You can redirect or show a message here if the user is unauthenticated
    }

    return status === 'authenticated' && business ? (
        <div className='py-8 md:py-20 px-10 md:px-36'>
            {/* Pass business data only when it exists */}
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
    ) : null; // If no business or session, return null
}

export default BusinessDetail;
