import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { GraduationCap, Menu } from 'lucide-react'

export function AppBar() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/admin" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold">CSE Admin</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/admin/faculty" passHref>
              <Button variant="ghost">Faculty</Button>
            </Link>
            <Link href="/admin/gate-toppers" passHref>
              <Button variant="ghost">GATE Toppers</Button>
            </Link>
            <Link href="/admin/placements" passHref>
              <Button variant="ghost">Placements</Button>
            </Link>
            <Link href="/admin/gallery" passHref>
              <Button variant="ghost">Gallery</Button>
            </Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}