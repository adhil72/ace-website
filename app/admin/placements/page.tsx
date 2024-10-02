'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Card } from "@/components/ui/card"
import { Search, Trash2, Upload } from "lucide-react"
import { TypePlacements } from '../../api/type'

export default function PlacementManagement() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [packageLpa, setPackage] = useState('')
  const [year, setYear] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [placements, setPlacements] = useState<TypePlacements[]>([])
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

    if (!name.trim() || !company.trim() || !packageLpa.trim() || !year.trim() || !previewUrl) {
      setError('Please fill in all fields and upload an image.')
      return
    }

    const data: TypePlacements = {
      id: '',
      company,
      name,
      package: packageLpa,
      year,
      imageUrl: previewUrl,
    }

    fetch('/api/placement', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => fetchPlacementMembers())


    setFile(null)
    setPreviewUrl(null)
    setName('')
    setCompany('')
    setPackage('')
    setYear('')

    alert('Placement member added successfully!')
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this placement member?')) {
      fetch(`/api/placement?id=${id}`, { method: 'DELETE' }).then(() => { fetchPlacementMembers() })
    }
  }

  const filteredPlacements = placements.filter(placement =>
    placement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    placement.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const fetchPlacementMembers = async () => {
    const response = await fetch('/api/placement')
    const data = await response.json()
    setPlacements(data)
  }

  useEffect(() => {
    fetchPlacementMembers()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 mb-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Add Placement Member</h1>
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
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Enter company name"
              />
            </div>
            <div>
              <Label htmlFor="package">Package</Label>
              <Input
                id="package"
                type="text"
                value={packageLpa}
                onChange={(e) => setPackage(e.target.value)}
                placeholder="Enter package in LPA"
              />

            </div>
            <div>
              <Label htmlFor="year">Year</Label>
              <Input
                id="year"
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Enter year"
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
              Add Placement Member
            </Button>
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Manage Placement Members</h2>
          <div className="mb-4">
            <Label htmlFor="search">Search Placement</Label>
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
            {filteredPlacements.map((placement) => (
              <Card key={placement.id} className="p-4 flex items-center space-x-4">
                <img src={placement.imageUrl} alt={placement.name} className="w-16 h-16 rounded-full object-cover" />
                <div className="flex-grow">
                  <h3 className="font-bold">{placement.name}</h3>
                  <p className="text-sm text-gray-500">
                    {placement.company} <br />
                    {placement.package} <br />
                    {placement.year}
                  </p>
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDelete(placement.id)}
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