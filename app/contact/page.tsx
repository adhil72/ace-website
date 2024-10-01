import { MapPin, Phone, Mail, Globe, MountainIcon } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
    return (
        <div className="flex flex-col min-h-screen md:px-32">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link href="#" className="flex items-center justify-center" prefetch={false}>
                    {/* <MountainIcon className="h-6 w-6" /> */}
                    <span className="font-bold">
                        <img src="/logo.svg" className="" alt="" />
                    </span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        href="/achievements"
                        className="text-sm font-medium hover:underline underline-offset-4"
                        prefetch={false}>
                        Achievements
                    </Link>
                    <Link
                        href="/#gate"
                        className="text-sm font-medium hover:underline underline-offset-4"
                        prefetch={false}>
                        Gate
                    </Link>
                    <Link
                        href="/#execom"
                        className="text-sm font-medium hover:underline underline-offset-4"
                        prefetch={false}>
                        Execom
                    </Link>
                    <Link
                        href="/#gallery"
                        className="text-sm font-medium hover:underline underline-offset-4"
                        prefetch={false}>
                        Gallery
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Contact Us
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Department of Computer Science, Government Engineering College Wayanad
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 rounded-xl">
                    <div className="px-4 md:px-6">
                        <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Contact Information</CardTitle>
                                        <CardDescription>Reach out to us using the following details</CardDescription>
                                    </CardHeader>
                                    <CardContent className="grid gap-4">
                                        <div className="flex items-center">
                                            <MapPin className="mr-2 h-4 w-4" />
                                            <p>Government Engineering College Wayanad, Mananthavady, Kerala - 670644</p>
                                        </div>
                                        <div className="flex items-center">
                                            <Phone className="mr-2 h-4 w-4" />
                                            <p>04935257321 | +91 79027 17545</p>
                                        </div>
                                        <div className="flex items-center">
                                            <Mail className="mr-2 h-4 w-4" />
                                            <p>cs@gecwyd.ac.in</p>
                                        </div>
                                        <div className="flex items-center">
                                            <Globe className="mr-2 h-4 w-4" />
                                            <a href="https://www.gecwyd.ac.in" className="hover:underline">
                                                www.gecwyd.ac.in
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Send us a Message</h2>
                                <form className="space-y-4">
                                    <Input placeholder="Your Name" className="bg-white" />
                                    <Input type="email" placeholder="Your Email" className="bg-white" />
                                    <Input placeholder="Subject" className="bg-white" />
                                    <Textarea placeholder="Your Message" className="bg-white" />
                                    <Button type="submit" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-8">Location</h2>
                        <div className="aspect-video overflow-hidden rounded-lg">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7810.047156121306!2d75.97042370000001!3d11.8336225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5db955198afb1%3A0x6b304f91fab809b6!2sGovernment%20Engineering%20College%2C%20Wayanad!5e0!3m2!1sen!2sin!4v1724222929616!5m2!1sen!2sin" className="w-full h-full rounded-xl" style={{ border: 0 }} loading="lazy" ></iframe>
                        </div>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            Government Engineering College Wayanad is located in Mananthavady, Kerala. The college is easily
                            accessible by road.
                        </p>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2024 Government Engineering College Wayanad. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}