'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Card } from "@/components/ui/card"
import { Upload, Search, Trash2 } from "lucide-react"

// Mock data for demonstration purposes
const initialPhotos = [
  { id: 1, name: 'CSE Lab', url: '/placeholder.svg?height=100&width=100' },
  { id: 2, name: 'Students Working', url: '/placeholder.svg?height=100&width=100' },
  { id: 3, name: 'Department Building', url: '/placeholder.svg?height=100&width=100' },
]

export default function AdminGalleryManagement() {
  const [name, setName] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [photos, setPhotos] = useState(initialPhotos)
  const [searchTerm, setSearchTerm] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreviewUrl(URL.createObjectURL(selectedFile))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!name.trim()) {
      setError('Please enter a name for the photo.')
      return
    }

    if (!file) {
      setError('Please select a photo to upload.')
      return
    }

    // TODO: Implement the actual file upload logic here
    // This would typically involve sending the file and name to your server
    console.log('Uploading:', { name, file })

    // Simulate adding the new photo to the list
    const newPhoto = { id: Date.now(), name, url: URL.createObjectURL(file) }
    setPhotos([newPhoto, ...photos])

    // Reset form after successful upload
    setName('')
    setFile(null)
    setPreviewUrl(null)

    alert('Photo uploaded successfully!')
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this photo?')) {
      setPhotos(photos.filter(photo => photo.id !== id))
    }
  }

  const filteredPhotos = photos.filter(photo =>
    photo.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 mb-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Upload Gallery Photo</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Photo Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter photo name"
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
              Upload Photo
            </Button>
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Manage Gallery Photos</h2>
          <div className="mb-4">
            <Label htmlFor="search">Search Photos</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="search"
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className="relative group">
                <img src={photo.url} alt={photo.name} className="w-full h-40 object-cover rounded-md" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <p className="text-white text-center">{photo.name}</p>
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => handleDelete(photo.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}