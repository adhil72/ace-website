'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Card } from "@/components/ui/card"
import { Search, Trash2, Upload } from "lucide-react"
import { TypeGateHolder } from '../../api/type'

export default function GateManagement() {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [rank, setRank] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [gateToppers, setGateToppers] = useState<TypeGateHolder[]>([])
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!name.trim() || !subject.trim() || !previewUrl) {
      setError('Please fill in all fields and upload an image.')
      return
    }

    const data:TypeGateHolder = {
      id: '',
      name,
      rank,
      imageUrl: previewUrl,
      subject,
    }

    fetch('/api/gate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(() => {
      fetchData()
    })

    setName('')
    setSubject('')
    setRank('')
    setFile(null)
    setPreviewUrl(null)
    alert('Gate member added successfully!')
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this gate member?')) {
      fetch(`/api/gate?id=${id}`, {
        method: 'DELETE'
      }).then(res => res.json()).then(() => {
        fetchData()
      })
    }
  }

  const filteredGateToppers = gateToppers.filter(gate =>
    gate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    gate.rank.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const fetchData = async () => {
    const response = await fetch('/api/gate')
    if (response.ok) {
      const data = await response.json()
      setGateToppers(data)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 mb-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Add Gate Member</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
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
              <Label htmlFor="rank">Rank</Label>
              <Input
                id="rank"
                type="text"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                placeholder="Enter rank"
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
              Add Gate Member
            </Button>
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Manage Gate Members</h2>
          <div className="mb-4">
            <Label htmlFor="search">Search Gate</Label>
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
            {filteredGateToppers.map((gate) => (
              <Card key={gate.id} className="p-4 flex items-center space-x-4">
                <img src={gate.imageUrl} alt={gate.name} className="w-16 h-16 rounded-full object-cover" />
                <div className="flex-grow">
                  <h3 className="font-bold">{gate.subject}</h3>
                  <p className="text-sm text-gray-500">{gate.rank}</p>
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDelete(gate.id)}
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