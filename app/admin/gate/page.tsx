'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Card } from "@/components/ui/card"
import { Search, Trash2, Upload } from "lucide-react"

const initialFaculties = [
  { id: 1, name: 'Dr. John Doe', subject: 'Data Structures', imageUrl: '/placeholder.svg?height=100&width=100' },
  { id: 2, name: 'Prof. Jane Smith', subject: 'Algorithms', imageUrl: '/placeholder.svg?height=100&width=100' },
  { id: 3, name: 'Dr. Mike Johnson', subject: 'Database Management', imageUrl: '/placeholder.svg?height=100&width=100' },
]

export default function FacultyManagement() {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [faculties, setFaculties] = useState(initialFaculties)
  const [searchTerm, setSearchTerm] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreviewUrl(URL.createObjectURL(selectedFile))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!name.trim() || !subject.trim() || !file) {
      setError('Please fill in all fields and upload an image.')
      return
    }

    const newFaculty = { 
      id: Date.now(), 
      name, 
      subject,
      imageUrl: URL.createObjectURL(file)
    }
    setFaculties([newFaculty, ...faculties])

    setName('')
    setSubject('')
    setFile(null)
    setPreviewUrl(null)
    alert('Faculty member added successfully!')
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this faculty member?')) {
      setFaculties(faculties.filter(faculty => faculty.id !== id))
    }
  }

  const filteredFaculties = faculties.filter(faculty =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.subject.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 mb-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Add Faculty Member</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter faculty name"
              />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter subject"
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
            {previewUrl && (
              <div className="mt-4">
                <Label>Preview</Label>
                <img src={previewUrl} alt="Preview" className="mt-2 max-h-48 rounded-md" />
              </div>
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full">
              Add Faculty Member
            </Button>
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Manage Faculty Members</h2>
          <div className="mb-4">
            <Label htmlFor="search">Search Faculty</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="search"
                type="text"
                placeholder="Search by name or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="space-y-4">
            {filteredFaculties.map((faculty) => (
              <Card key={faculty.id} className="p-4 flex items-center space-x-4">
                <img src={faculty.imageUrl} alt={faculty.name} className="w-16 h-16 rounded-full object-cover" />
                <div className="flex-grow">
                  <h3 className="font-bold">{faculty.name}</h3>
                  <p className="text-sm text-gray-500">{faculty.subject}</p>
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDelete(faculty.id)}
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