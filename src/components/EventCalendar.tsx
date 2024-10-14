"use client"

import { useState } from "react";
import Image from "next/image";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        tilte: "Event 1",
        time: "10:00 AM",
        description: "This is event 1",
    },
    {
        id: 2,
        tilte: "Event 2",
        time: "10:00 AM",
        description: "This is event 2",
    },
    {
        id: 3,
        tilte: "Event 3",
        time: "10:00 AM",
        description: "This is event 3",
    },
]



const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className="bg-white rounded-md p-4">
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src="/moreDark.png" width={20} height={20} alt="event" />
            </div>
            <div className="flex flex-col gap-4">
                {events.map(event => (
                    <div key={event.id} className="p-5 rounded-md border-2 border-gray-2
                    border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple">
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">{event.tilte}</h1>
                            <span className="text-gray-300 text-xs">{event.time}</span>
                        </div>
                        <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default EventCalendar;  