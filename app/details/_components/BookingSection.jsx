import React, { use, useEffect, useState } from 'react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose
} from '@/components/ui/sheet';

import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import GlobalApi from '@/app/_services/GlobalApi';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';
import moment from 'moment';

function BookingSection({ children, business }) {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState([]);
    const [selectedTime, setSelectedTime] = useState();
    const [bookedSlot, setBookedSlot] = useState([]);
    const { data } = useSession();

    useEffect(() => {
        getTime();
        setDate();
        setSelectedTime('');
    }, []);

    useEffect(() => {
        console.log(business);
    }, [business]);

    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }

        setTimeSlot(timeList);
    };

    const saveBooking = () => {
        if (!business || !business.id) {
            toast.error("Business information is missing.");
            return;
        }

        GlobalApi.createNewBooking(business.id, moment(date).format('DD-MMM-yyyy'), selectedTime, data.user.email, data.user.name)
            .then(resp => {
                console.log(resp);
                toast.success("Booking successful!");
            })
            .catch((error) => {
                console.error(error);
                toast.error("There was an error while booking.");
            });
    };



    useEffect(() => {
        date && BusinessBookedSlot();
    }, [date])

    const BusinessBookedSlot = () => {
        GlobalApi.BusinessBookedSlot(business.id, moment(date).format('DD-MMM-yyyy'))
            .then(resp => {
                console.log(resp);
                setBookedSlot(resp.bookings);
            })
    }


    const isSlotBooked = (time) => {
        return bookedSlot.find(item => item.time == time)
    }



    if (!business) {
        return <div>Loading business data...</div>;
    }

    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent className='overflow-auto'>
                    <SheetHeader>
                        <SheetTitle>Book a Service</SheetTitle>
                    </SheetHeader>
                    <div className="space-y-4 mt-4">
                        <p>Select Date and Time slot to book a service</p>
                        <div className='flex flex-col gap-5 items-baseline'>
                            <h2 className="text-lg font-semibold mt-2">Select Date</h2>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                disabled={{ before: new Date() }}
                                className="rounded-md border shadow"
                            />
                        </div>
                        <h2 className='my-5 font-bold'>Select Time Slot</h2>
                        <div className='grid grid-cols-3 gap-3'>
                            {timeSlot.map((item, index) => (
                                <Button key={index}
                                    variant='outline'
                                    disabled={isSlotBooked(item.time)}
                                    className={`border rounded-full p-2 px-3 hover:bg-purple-500 hover:text-white
                                        ${selectedTime == item.time && 'bg-purple-500 text-white'}`}
                                    onClick={() => setSelectedTime(item.time)}>
                                    {item.time}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <SheetFooter className='mt-5'>
                        <SheetClose asChild>
                            <div className='flex gap-5'>
                                <Button disabled={!(selectedTime && date)} onClick={() => saveBooking()}>Book</Button>
                                <Button variant='destructive'>Cancel</Button>
                            </div>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default BookingSection;
