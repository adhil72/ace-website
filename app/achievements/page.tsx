"use client";

import FullScreenPhoto from "@/components/feature/FullScreenPhoto"
import { useState } from "react";
import { TypePlacements, TypeSemResult } from "../api/type";

// const s1Topers = [
//   {
//     name: "Akhil Sebastian",
//     sgpa: 9.56,
//     img: "/s1_1.jpeg"
//   },
//   {
//     name: "Alok Krishna K P",
//     sgpa: 9.47,
//     img: "/s1_2.jpeg"
//   },
//   {
//     name: "Anushree K",
//     sgpa: 9.29,
//     img: "/s1_3.jpeg"
//   }
// ]

// const s3Topers = [
//   {
//     name: "Anshidha",
//     sgpa: 9.73,
//     img: "/s3_1.jpeg"
//   },
//   {
//     name: "ABHIRAM k",
//     sgpa: 9.55,
//     img: "/s3_2.jpeg"
//   },
//   {
//     name: "Hariprasad",
//     sgpa: 9.18,
//     img: "/s3_3.jpeg"
//   }
// ]

// const s5Topers = [
//   {
//     name: "Charchika B Sreejith",
//     sgpa: 9.13,
//     img: "/s5_1.jpeg"
//   },
//   {
//     name: "Anusha C",
//     sgpa: 9.09,
//     img: "/s5_2.jpeg"
//   },
//   {
//     name: "Rehna Das C",
//     sgpa: 8.67,
//     img: "/s5_3.jpeg"
//   }
// ]

// const s7Topers = [
//   {
//     name: "Diya Baiju N",
//     sgpa: 9.8,
//     img: "/s7_1.jpeg"
//   },
//   {
//     name: "Brice Joshy",
//     sgpa: 9.23,
//     img: "/s7_2.jpeg"
//   },
//   {
//     name: "Berli kurian",
//     sgpa: 9.17,
//     img: "/s7_3.jpeg"
//   }
// ]

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

export default function Achievements() {

  const [results, setResults] = useState<TypeSemResult[]>([])
  const [placements, setPlacements] = useState<TypePlacements[]>([])

  return (
    (<div className="flex-1 px-4 md:px-32">
      <section className="bg-background py-12 md:py-16 lg:py-20">
        <div className="">
          <div className="mb-8 space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Toppers</h2>
            <p className="text-black font-bold text-xl">Semester 1</p>
          </div>
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {
              results.filter((r)=>r.batch==='s1').map((i) => {
                return <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <img
                    src={i.imageUrl}
                    width={200}
                    height={200}
                    alt="Student"
                    className="mx-auto mb-4 object-contain object-top rounded-full"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }} />
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-medium">{i.name}</h3>
                    <p className="text-lg font-semibold">{i.sgpa} SGPA</p>
                  </div>
                </div>
              })
            }

          </div>

          <div className="mb-8 space-y-2 my-10">
            <p className="text-black font-bold text-xl">Semester 3</p>
          </div>
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {
              results.filter((r)=>r.batch==='s3').map((i) => {
                return <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <img
                    src={i.imageUrl}
                    width={200}
                    height={200}
                    alt="Student"
                    className="mx-auto mb-4 object-contain object-top rounded-full"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }} />
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-medium">{i.name}</h3>
                    <p className="text-lg font-semibold">{i.sgpa} SGPA</p>
                  </div>
                </div>
              })
            }

          </div>

          <div className="mb-8 space-y-2 my-10">
            <p className="text-black font-bold text-xl">Semester 5</p>
          </div>
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {
              results.filter((r)=>r.batch==='s5').map((i) => {
                return <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <img
                    src={i.imageUrl}
                    width={200}
                    height={200}
                    alt="Student"
                    className="mx-auto mb-4 rounded-full"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }} />
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-medium">{i.name}</h3>
                    <p className="text-lg font-semibold">{i.sgpa} SGPA</p>
                  </div>
                </div>
              })
            }

          </div>

          <div className="mb-8 space-y-2 my-10">
            <p className="text-black font-bold text-xl">Semester 7</p>
          </div>
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {
              results.filter((r)=>r.batch==='s7').map((i) => {
                return <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <img
                    src={i.imageUrl}
                    width={200}
                    height={200}
                    alt="Student"
                    className="mx-auto mb-4 rounded-full"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }} />
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-medium">{i.name}</h3>
                    <p className="text-lg font-semibold">{i.sgpa} SGPA</p>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </section>
      <section id="placements" className="bg-muted rounded-xl p-12 md:py-16 lg:py-20">
        <div className="">
          <div className="mb-8 space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Placements</h2>
            <p className="text-muted-foreground">Placements records at gecw</p>
          </div>
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
              placements.map(({company,id,imageUrl,name,packageLpa,year}) => {
                return <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <img
                    src={imageUrl}
                    width={200}
                    height={200}
                    alt="Student"
                    className="mx-auto mb-4 rounded-full"
                    style={{ aspectRatio: "80/80", objectFit: "cover" }} />
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-medium">{name}</h3>
                    <p className="text-sm text-muted-foreground">{company}</p>
                    <p className="text-lg font-semibold">{packageLpa} LPA</p>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </section>
      <section id="gate" className="bg-background py-12 md:py-16 lg:py-20">
        <div className="">
          <div className="mb-8 space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Gallary</h2>
          </div>
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {
              Array(24).fill('').map((_, i) => {
                return <div className="w-full h-[180px]">
                  <FullScreenPhoto src={`/g/${i + 1}.jpg`} alt="Student" />
                </div>
              })
            }

          </div>

        </div>
      </section>
    </div>)
  );
}
