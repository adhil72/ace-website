'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Clock, MapPin, Upload, Search, Trash2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface TypeEvent {
    id: string;
    title: string;
    desc: string;
    date: string;
    time: string;
    venue: string;
    imageUrl: string;
}

export default function EventManagement() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [date, setDate] = useState<Date>()
    const [time, setTime] = useState('')
    const [venue, setVenue] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [events, setEvents] = useState<TypeEvent[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [uploadProgress, setUploadProgress] = useState(0)

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        setUploadProgress(0)
        if (selectedFile) {
            const response = await fetch(
                `/api/upload?filename=${selectedFile.name}`,
                {
                    method: 'POST',
                    body: selectedFile,
                },
            );
            setUploadProgress(100)
            setTimeout(async () => {
                setUploadProgress(0)
                if (response.ok) {
                    const data = await response.json();
                    setImageUrl(data.url)
                } else {
                    setError('Failed to upload file');
                }
            }, 1000);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)

        if (!title || !desc || !date || !time || !venue || !imageUrl) {
            setError('Please fill all fields')
            return
        }

        const newEvent: TypeEvent = {
            id: '',
            title,
            desc,
            date: format(date, 'yyyy-MM-dd'),
            time,
            venue,
            imageUrl
        }

        try {
            const response = await fetch('/api/event', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newEvent)
            })

            if (response.ok) {
                await fetchEvents()
                resetForm()
            } else {
                setError('Failed to add event')
            }
        } catch (error) {
            setError('An error occurred while adding the event')
        }
    }

    const resetForm = () => {
        setTitle('')
        setDesc('')
        setDate(undefined)
        setTime('')
        setVenue('')
        setImageUrl('')
        setUploadProgress(0)
    }

    const fetchEvents = async () => {
        try {
            const response = await fetch('/api/event')
            if (response.ok) {
                const data = await response.json()
                setEvents(data)
            } else {
                setError('Failed to fetch events')
            }
        } catch (error) {
            setError('An error occurred while fetching events')
        }
    }

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            try {
                const response = await fetch(`/api/event?id=${id}`, {
                    method: 'DELETE'
                })
                if (response.ok) {
                    await fetchEvents()
                } else {
                    setError('Failed to delete event')
                }
            } catch (error) {
                setError('An error occurred while deleting the event')
            }
        }
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Card className="p-6 mb-8">
                    <h1 className="text-2xl font-bold mb-6 text-center">Add New Event</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="title">Event Title</Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter event title"
                            />
                        </div>
                        <div>
                            <Label htmlFor="desc">Description</Label>
                            <Textarea
                                id="desc"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                placeholder="Enter event description"
                            />
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <Label htmlFor="date">Date</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="time">Time</Label>
                                <div className="relative">
                                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <Input
                                        id="time"
                                        type="time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="venue">Venue</Label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <Input
                                    id="venue"
                                    value={venue}
                                    onChange={(e) => setVenue(e.target.value)}
                                    placeholder="Enter event venue"
                                    className="pl-10"
                                />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="image">Event Image</Label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="image"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <Input
                                                id="image"
                                                name="image"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                                className="sr-only"
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        {uploadProgress > 0 && uploadProgress < 100 && (
                            <div className="mt-2">
                                <Progress value={uploadProgress} className="w-full" />
                                <p className="text-sm text-gray-500 mt-1">{`Uploading: ${Math.round(uploadProgress)}%`}</p>
                            </div>
                        )}
                        {imageUrl && (
                            <div className="mt-4">
                                <Label>Preview</Label>
                                <img src={imageUrl} alt="Event Preview" className="mt-2 max-h-48 rounded-md" />
                            </div>
                        )}
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <Button type="submit" className="w-full">
                            Add Event
                        </Button>
                    </form>
                </Card>

                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4">Manage Events</h2>
                    <div className="mb-4">
                        <Label htmlFor="search">Search Events</Label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <Input
                                id="search"
                                type="text"
                                placeholder="Search by title or venue..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        {filteredEvents.map((event) => (
                            <Card key={event.id} className="p-4 flex items-center space-x-4">
                                <img src={event.imageUrl} alt={event.title} className="w-16 h-16 rounded-md object-cover" />
                                <div className="flex-grow">
                                    <h3 className="font-bold">{event.title}</h3>
                                    <p className="text-sm text-gray-500">{`${event.date} at ${event.time}`}</p>
                                    <p className="text-sm mt-1">{event.venue}</p>
                                </div>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => handleDelete(event.id)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </Card>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}