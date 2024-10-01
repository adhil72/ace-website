"use client";

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'

type Event = {
    id: string
    name: string
    description: string
    date: string
    time: string
    location: string
    category: string
    image: string
    status: 'upcoming' | 'past'
}

const events: Event[] = [
    {
        id: '1',
        name: 'TechFest 2024',
        description: 'Annual technical symposium featuring workshops, coding competitions, and guest lectures.',
        date: 'October 15-17, 2024',
        time: '9:00 AM - 6:00 PM',
        location: 'Main Auditorium, GEC Wayanad',
        category: 'Symposium',
        image: '/events/techfest.jpg',
        status: 'upcoming'
    },
    {
        id: '2',
        name: 'CodeCamp',
        description: 'Intensive 48-hour coding bootcamp for students to enhance their programming skills.',
        date: 'March 5-7, 2024',
        time: '9:00 AM - 9:00 PM',
        location: 'Computer Science Lab, GEC Wayanad',
        category: 'Workshop',
        image: '/events/codecamp.jpg',
        status: 'upcoming'
    },
    {
        id: '3',
        name: 'AI Workshop',
        description: 'Hands-on workshop on Artificial Intelligence and Machine Learning fundamentals.',
        date: 'January 20, 2024',
        time: '10:00 AM - 4:00 PM',
        location: 'Seminar Hall, CSE Department',
        category: 'Workshop',
        image: '/events/ai-workshop.jpg',
        status: 'past'
    },
    {
        id: '4',
        name: 'Hackathon 2023',
        description: '24-hour hackathon challenging students to solve real-world problems with innovative solutions.',
        date: 'November 12-13, 2023',
        time: '10:00 AM - 10:00 AM (next day)',
        location: 'Innovation Center, GEC Wayanad',
        category: 'Competition',
        image: '/events/hackathon.jpg',
        status: 'past'
    },
    {
        id: '5',
        name: 'Tech Talk: Future of Cloud Computing',
        description: 'Guest lecture by industry experts on the latest trends in cloud computing.',
        date: 'February 15, 2024',
        time: '2:00 PM - 4:00 PM',
        location: 'Virtual Event',
        category: 'Seminar',
        image: '/events/tech-talk.jpg',
        status: 'upcoming'
    }
]

export default function EventsPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [categoryFilter, setCategoryFilter] = useState('all')


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">ACE Events</h1>


            <EventList events={events}/>
        </div>
    )
}

function EventList({ events }: { events: Event[] }) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map(event => (
                <Card key={event.id} className="flex flex-col">
                    <CardHeader>
                        <img src={event.image} alt={event.name} className="w-full h-48 object-cover rounded-t-lg" />
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <CardTitle>{event.name}</CardTitle>
                        <CardDescription className="mt-2">{event.description}</CardDescription>
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
                                <span className="text-sm">{event.location}</span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full">
                            <Link href={`/events/${event.id}`}>Learn More</Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}