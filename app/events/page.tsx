"use client";

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { TypeEvent } from '../api/type';

export default function EventsPage() {

    const [events, setEvents] = useState<TypeEvent[]>([])

    useEffect(() => {
        fetch('/api/event')
            .then(res => res.json())
            .then(data => {
                setEvents(data)
            })
    },[])

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">ACE Events</h1>
            <EventList events={events}/>
        </div>
    )
}

function EventList({ events }: { events: TypeEvent[] }) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map(event => (
                <Card key={event.id} className="flex flex-col">
                    <CardHeader>
                        <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription className="mt-2">{event.desc}</CardDescription>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span className="text-sm">{event.date}</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span className="text-sm">{event.time}</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span className="text-sm">{event.venue}</span>
                            </div>
                        </div>
                    </CardContent>
                    {/* <CardFooter>
                        <Button asChild className="w-full">
                            <Link href={`/events/${event.id}`}>Learn More</Link>
                        </Button>
                    </CardFooter> */}
                </Card>
            ))}
        </div>
    )
}