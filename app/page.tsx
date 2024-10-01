import CarouselGallery from "@/components/feature/Carousel";
import Link from "next/link"

const gallaryItems = Array(24).fill('').map((_, i) => `/g/${i + 1}.jpg`)

const gateQualifiers = [
  {
    name: "Ashiq MA",
    rank: "AIR 2953",
    steram: "DA",
    img: "/gate/1.jpg"
  },
  {
    name: "Sreelakshmi PP",
    rank: "AIR 7004",
    steram: "CS",
    img: "/gate/2.jpg"
  },
  {
    name: "Aswhin MK",
    rank: "AIR 6610",
    steram: "CS",
    img: ""
  }
]

const placements = [
  {
    name: "Aiswarya Rajesh",
    lpa: 4.5,
    company: "Q spiders",
    img: "/1.jpg"
  },
  {
    name: "Afra Musthafa",
    lpa: 4.5,
    company: "Q spiders",
    img: "/2.jpg"
  },
  {
    name: "Abhinav p",
    lpa: 4.5,
    company: "Q spiders",
    img: "/3.jpg"
  },
  {
    name: "Clement Mathew",
    lpa: 4,
    company: "Q Burst",
    img: "/4.jpg"
  },
  {
    name: "Janvi rajeev",
    lpa: 4.5,
    company: "Q spiders",
    img: "/5.jpg"
  },
  {
    name: "Mohammed Niyas",
    lpa: 4,
    company: "Q spiders",
    img: "/6.jpg"
  },
  {
    name: "Malavika T",
    lpa: 4,
    company: "Q spiders",
    img: "/7.jpg"
  },
  {
    name: "Sabeeh Sharof Perincheeri",
    lpa: 4.5,
    company: "Q spiders",
    img: "/8.jpg"
  },
  {
    name: "Shamila PK",
    lpa: 4,
    company: "TATA ELXSI",
    img: "/9.jpg"
  }
]

const aceEvents = [
  {
    name: "TechFest 2023",
    description: "Annual technical symposium featuring workshops, coding competitions, and guest lectures.",
    date: "October 15-17, 2023",
    image: "/1.jpg"
  },
  {
    name: "CodeCamp",
    description: "Intensive 48-hour coding bootcamp for students to enhance their programming skills.",
    date: "March 5-7, 2024",
    image: "/2.jpg"
  },
  {
    name: "AI Workshop",
    description: "Hands-on workshop on Artificial Intelligence and Machine Learning fundamentals.",
    date: "January 20, 2024",
    image: "/3.jpg"
  }
];

export default function Home() {
  return <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 justify-center md:justify-between lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          {/* <MountainIcon className="h-6 w-6" /> */}
          <span className="font-bold hidden md:block">
            <img src="/logo.svg" className="" alt="" />
          </span>
        </Link>
        <div className="flex gap-4 sm:gap-6">
          <Link
            href="/achievements"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Achievements
          </Link>
          <Link
            href="#gate"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Gate
          </Link>
          <Link
            href="#execom"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Execom
          </Link>
          <Link
            href="#gallery"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Gallery
          </Link>
        </div>
      </header>
      <main className="flex-1 w-screen px-6">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-1 md:px-32">
            <div
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Association of Computer Engineers
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover the cutting-edge of technology at GEC Wayanad's renowned CSE department. Explore our
                    world-class faculty, state-of-the-art facilities, and vibrant research opportunities.
                  </p>
                </div>
                <div className="flex flex-col gap-2 md:flex-row">
                  <Link
                    href="/about"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    About
                  </Link>
                  <Link
                    href="/achievements"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Achievements
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Contact
                  </Link>
                </div>
              </div>
              <img
                src="/c.jpg"
                alt="Hero"
                className="w-[100%] h-[230px] md:h-[400px] object-cover rounded-lg" />
            </div>
          </div>
        </section>

        <section id="execom" className="w-full py-12 md:py-24 lg:py-32 bg-muted rounded-lg">
          <div className="px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block bg-muted rounded-lg px-3 py-1 text-sm">Commitee</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ace execom</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the dedicated team of faculty and students who lead the Association of Computer Engineers.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <center className="grid gap-1 ">
                <img
                  src="/gsh.jpg"
                  width="200"
                  height="200"
                  alt="Faculty"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover" />
                <h3 className="text-lg font-bold">Dr. Gilesh MP</h3>
                <p className="text-sm text-muted-foreground">Head of department</p>
                <p className="text-sm text-muted-foreground">President</p>
              </center>
              <center className="grid gap-1">
                <img
                  src="/dnr.jpeg"
                  width="200"
                  height="200"
                  alt="Faculty"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover" />
                <h3 className="text-lg font-bold">Dr. Dhanya P Raj</h3>
                <p className="text-sm text-muted-foreground">Professor</p>
                <p className="text-sm text-muted-foreground">Vice President</p>
              </center>
              <center className="grid gap-1">
                <img
                  src="/lr.jpeg"
                  width="200"
                  height="200"
                  alt="Faculty"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover" />
                <h3 className="text-lg font-bold">Lena ramachandhran</h3>
                <p className="text-sm text-muted-foreground">CSE student respresentative</p>
                <p className="text-sm text-muted-foreground">Secretary</p>
              </center>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block bg-muted rounded-lg px-3 py-1 text-sm">placement</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Top placements</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Top companies like TCS, Infosys, Wipro, and more visit our campus every year to recruit our talented students.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {
                placements.slice(0, 3).map((i) => <center className="grid gap-1 ">
                  <img
                    src={i.img}
                    width="200"
                    height="200"
                    alt="Faculty"
                    className="mx-auto aspect-square overflow-hidden rounded-full object-cover" />
                  <h3 className="text-lg font-bold">{i.name}</h3>
                  <p className="text-sm text-muted-foreground">Placed at {i.company} for {i.lpa} LPA</p>
                </center>)
              }
            </div>
            <center className="w-full flex justify-center">
              <Link
                href="/achievements#placements"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                More
              </Link>
            </center>
          </div>
        </section>

        <section id="gate" className="w-full py-12 md:py-24 lg:py-32 bg-muted rounded-lg">
          <div className="px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block bg-muted rounded-lg px-3 py-1 text-sm">gate excellence</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Gate toppers</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our students have consistently secured top ranks in the GATE exam, with many going on to pursue higher studies at prestigious institutions.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {
                gateQualifiers.map((i) => <center className="grid gap-1 ">
                  <img
                    src={i.img !== "" ? i.img : "/placeholder.svg"}
                    width="200"
                    height="200"
                    alt="Faculty"
                    className="mx-auto aspect-square overflow-hidden rounded-full object-cover" />
                  <h3 className="text-lg font-bold">{i.name}</h3>
                  <p className="text-sm font-semibold">{i.rank}</p>
                  <p className="text-sm text-muted-foreground">{i.steram}</p>
                </center>
                )
              }
            </div>
            {/* <center className="w-full flex justify-center">
              <Link
                href="/achievements#gate"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                More
              </Link>
            </center> */}
          </div>
        </section>

        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block bg-muted rounded-lg px-3 py-1 text-sm">arts</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Arts gallery</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Other than academics, our students are also talented in arts. Here are some of the best works from our students.
                </p>
              </div>
            </div>
            <div
              className="w-full h-[200px] md:h-[450px] mt-10">
              <CarouselGallery imageUrls={gallaryItems} />
            </div>
            <center className="w-full flex justify-center mt-10">
              <Link
                href="/achievements#gate"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                More
              </Link>
            </center>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block bg-white text-blue-600 rounded-lg px-3 py-1 text-sm font-semibold">
                  ACE Events
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Empowering Through Technology
                </h2>
                <p className="max-w-[900px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the exciting events organized by the Association of Computer Engineers to foster innovation and learning.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {aceEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800">{event.name}</h3>
                    <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                    <p className="text-sm font-semibold text-blue-600 mt-2">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/events"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white text-blue-600 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View All Events
              </Link>
            </div>
          </div>
        </section>



      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row w-full shrink-0 items-center px-10 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 GEC Wayanad. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  </div>
}