'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Upload, Search, Trash2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface TypeSemResult {
    id: string;
    name: string;
    sgpa: string;
    imageUrl: string;
    batch: string;
}

export default function SemesterResultManagement() {
    const [name, setName] = useState('')
    const [sgpa, setSgpa] = useState('')
    const [batch, setBatch] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [results, setResults] = useState<TypeSemResult[]>([])
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

        if (!name || !sgpa || !batch || !imageUrl) {
            setError('Please fill all fields')
            return
        }

        if (isNaN(parseFloat(sgpa)) || parseFloat(sgpa) < 0 || parseFloat(sgpa) > 10) {
            setError('SGPA must be a number between 0 and 10')
            return
        }

        const newResult: TypeSemResult = {
            id: '',
            name,
            sgpa,
            imageUrl,
            batch
        }

        try {
            const response = await fetch('/api/result', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newResult)
            })

            if (response.ok) {
                await fetchResults()
                resetForm()
            } else {
                setError('Failed to add semester result')
            }
        } catch (error) {
            setError('An error occurred while adding the semester result')
        }
    }

    const resetForm = () => {
        setName('')
        setSgpa('')
        setBatch('')
        setImageUrl('')
        setUploadProgress(0)
    }

    const fetchResults = async () => {
        try {
            const response = await fetch('/api/result')
            if (response.ok) {
                const data = await response.json()
                setResults(data)
            } else {
                setError('Failed to fetch semester results')
            }
        } catch (error) {
            setError('An error occurred while fetching semester results')
        }
    }

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this semester result?')) {
            try {
                const response = await fetch(`/api/result?id=${id}`, {
                    method: 'DELETE'
                })
                if (response.ok) {
                    await fetchResults()
                } else {
                    setError('Failed to delete semester result')
                }
            } catch (error) {
                setError('An error occurred while deleting the semester result')
            }
        }
    }

    useEffect(() => {
        fetchResults()
    }, [])

    const filteredResults = results.filter(result =>
        result.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.batch.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Card className="p-6 mb-8">
                    <h1 className="text-2xl font-bold mb-6 text-center">Add Semester Result</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Student Name</Label>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter student name"
                            />
                        </div>
                        <div>
                            <Label htmlFor="sgpa">SGPA</Label>
                            <Input
                                id="sgpa"
                                type="number"
                                step="0.01"
                                min="0"
                                max="10"
                                value={sgpa}
                                onChange={(e) => setSgpa(e.target.value)}
                                placeholder="Enter SGPA (0-10)"
                            />
                        </div>
                        <div>
                            <Label htmlFor="batch">Batch</Label>
                            <Input
                                id="batch"
                                value={batch}
                                onChange={(e) => setBatch(e.target.value)}
                                placeholder="Enter batch (e.g., 2020-2024)"
                            />
                        </div>
                        <div>
                            <Label htmlFor="image">Result Image</Label>
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
                                <img src={imageUrl} alt="Result Preview" className="mt-2 max-h-48 rounded-md" />
                            </div>
                        )}
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <Button type="submit" className="w-full">
                            Add Semester Result
                        </Button>
                    </form>
                </Card>

                <Card className="p-6">
                    <h2 className="text-xl font-bold mb-4">Manage Semester Results</h2>
                    <div className="mb-4">
                        <Label htmlFor="search">Search Results</Label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <Input
                                id="search"
                                type="text"
                                placeholder="Search by name or batch..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        {filteredResults.map((result) => (
                            <Card key={result.id} className="p-4 flex items-center space-x-4">
                                <img src={result.imageUrl} alt={`${result.name}'s Result`} className="w-16 h-16 rounded-md object-cover" />
                                <div className="flex-grow">
                                    <h3 className="font-bold">{result.name}</h3>
                                    <p className="text-sm text-gray-500">Batch: {result.batch}</p>
                                    <p className="text-sm mt-1">SGPA: {result.sgpa}</p>
                                </div>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => handleDelete(result.id)}
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