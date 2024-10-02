import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Briefcase, ImageIcon } from 'lucide-react'

export default function AdminIndex() {
  const adminPages = [
    { title: 'Faculty Management', description: 'Add, edit, or remove faculty members', icon: Users, href: '/admin/faculty' },
    { title: 'GATE Toppers', description: 'Manage GATE topper information', icon: Award, href: '/admin/gate' },
    { title: 'Placements', description: 'Track and update placement records', icon: Briefcase, href: '/admin/placements' },
    { title: 'Gallery Management', description: 'Upload and manage gallery photos', icon: ImageIcon, href: '/admin/gallery' },
    { title: 'Events', description: 'Manage department events', icon: ImageIcon, href: '/admin/event' },
    { title: 'Execom', description: 'Manage executive committee members', icon: ImageIcon, href: '/admin/execom' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">CSE Department Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adminPages.map((page, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <page.icon className="h-6 w-6" />
                  <span>{page.title}</span>
                </CardTitle>
                <CardDescription>{page.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={page.href} passHref>
                  <Button className="w-full">Manage</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}