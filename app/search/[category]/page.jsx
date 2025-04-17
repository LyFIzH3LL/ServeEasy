"use client"
import GlobalApi from '@/app/_services/GlobalApi'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import BusinessList from '@/app/_components/BusinessList';
function BusinessByCategory() {

    const params = useParams();
    const category = params?.category;
    const [businessList, setBusinessList] = useState([]);

    useEffect(() => {
        if (category) {
            getBusinessLists(category);
        }
    }, [category]);


    const getBusinessLists = (category) => {
        GlobalApi.getBusinessByCategory(category)
            .then(resp => {
                setBusinessList(resp?.businessLists);
            })
    }




    return (
        <div>
            <BusinessList title={params.category}
                BusinessLists={businessList} />
        </div>
    )
}

export default BusinessByCategory