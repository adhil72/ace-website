'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Card } from "@/components/ui/card"
import { Upload, Search, Trash2 } from "lucide-react"
import { Progress } from "@radix-ui/react-progress"
import { TypeExecom } from '../../api/type'

export default function ExeComManagement() {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [title, setTitle] = useState('')
    const [file, setFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [members, setMembers] = useState<TypeExecom[]>([])
    const [searchTerm, setSearchTerm] = useState('')
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
                    setPreviewUrl(data.url)
                } else {
                    setError('Failed to upload file');
                }
            }, 1000);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)

        if (!name || !role || !title || !previewUrl) {
            setError('Please fill all fields')
            return
        }

        const data: TypeExecom = {
            id: '',
            imageUrl: previewUrl,
            name,
            role,
            title
        }

        try {
            const response = await fetch('/api/execom', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            if (response.ok) {
                await fetchMembers()
                setName('')
                setRole('')
                setTitle('')
                setPreviewUrl(null)
                setFile(null)
                setUploadProgress(0)
            } else {
                setError('Failed to add ExeCom member')
            }
        } catch (error) {
            setError('An error occurred while adding the ExeCom member')
        }
    }

    const fetchMembers = async () => {
        try {
            const response = await fetch('/api/execom')
            if (response.ok) {
                const data = await response.json()
                setMembers(data)
            } else {
                setError('Failed to fetch ExeCom members')
            }
        } catch (error) {
            setError('An error occurred while fetching ExeCom members')
        }
    }

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this ExeCom member?')) {
            try {
                const response = await fetch(`/api/execom?id=${id}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                })
                if (response.ok) {
                    await fetchMembers()
                } else {
                    setError('Failed to delete ExeCom member')
                }
            } catch (error) {
                setError('An error occurred while deleting the ExeCom member')
            }
        }
    }

    useEffect(() => {
        fetchMembers()
    }, [])

    const filteredMembers = members.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Card className="p-6 mb-8">
                    <h1 className="text-2xl font-bold mb-6 text-center">Add ExeCom Member</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter member name"
                            />
                        </div>
                        <div>
                            <Label htmlFor="role">Role</Label>
                            <Input
                                id="role"
                                type="text"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                placeholder="Enter member role"
                            />
                        </div>
                        <div>
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter member title"
                            />
                        </div>
                        <div>
                            <Label htmlFor="photo">Photo</Label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="photo"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <Input
                                                id="photo"
                                                name="photo"
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
                        {uploadProgress > 0 && <div className="mt-2">
                            <div className='w-full h-3 bg-gray-200 overflow-hidden rounded-xl transition-all duration-100'>
                                <div className='bg-black h-full transition-all duration-100' style={{ width: `${uploadProgress}%` }}></div>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{`Uploading: ${Math.round(uploadProgress)}%`}</p>
                        </div>}
                        {previewUrl && (
                            <div className="mt-4">
                                <Label>Preview</Label>
                                <img src={previewUrl} alt="Preview" className="mt-2 max-h-48 rounded-md" />
                            </div>
                        )}
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <Button type="submit" className="w-full">
                            Add ExeCom Member
                        </Button>
                    </form>
                </Card>

                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4">Manage ExeCom Members</h2>
                    <div className="mb-4">
                        <Label htmlFor="search">Search Members</Label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <Input
                                id="search"
                                type="text"
                                placeholder="Search by name or role..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        {filteredMembers.map((member) => (
                            <Card key={member.id} className="p-4 flex items-center space-x-4">
                                <img src={member.imageUrl} alt={member.name} className="w-16 h-16 rounded-full object-cover" />
                                <div className="flex-grow">
                                    <h3 className="font-bold">{member.name}</h3>
                                    <p className="text-sm text-gray-500">{member.role}</p>
                                    <p className="text-sm mt-1">{member.title}</p>
                                </div>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => handleDelete(member.id)}
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