"use client";
import LayoutGuest from "@/components/layouts/layout-guest";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  FaBrush,
  FaBullhorn,
  FaPen,
  FaFilm,
  FaMusic,
  FaCode,
  FaBusinessTime,
  FaRunning,
  FaDatabase,
  FaCamera,
} from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const categories = [
    { name: "Graphics & Design", icon: FaBrush },
    { name: "Digital Marketing", icon: FaBullhorn },
    { name: "Writing & Translation", icon: FaPen },
    { name: "Video & Animation", icon: FaFilm },
    { name: "Music & Audio", icon: FaMusic },
    { name: "Programming & Tech", icon: FaCode },
    { name: "Business", icon: FaBusinessTime },
    { name: "Lifestyle", icon: FaRunning },
    { name: "Data", icon: FaDatabase },
    { name: "Photography", icon: FaCamera },
  ];

  return (
    <LayoutGuest>
      <main className="flex flex-col justify-between bg-snow">
        <section className="relative w-full h-[600px] flex items-center justify-center text-black overflow-hidden border-dashed border-b-2 border-black">
          <div className="absolute inset-0 z-0 overflow-hidden flex justify-center bg-yellow-400">
            <div className="relative w-[1920px] h-[750px]">
              <Image
                src="/images/home-banner.png"
                alt="Banner"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <motion.div
            className="z-10 absolute top-1/3 transform -translate-y-1/2 left-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-bold text-left">
              Buzz into your next <br />{" "}
              <span className="italic text-white">freelance</span> gig.
            </h1>
            <p className="text-lg mt-4 text-left">
              Discover Freelance Gigs at Hivework.
            </p>
            <Link href="/sign-up">
              <Button className="mt-4 rounded-full">Get Started</Button>
            </Link>
          </motion.div>
        </section>

        <section className="flex flex-row justify-center items-center pb-2 bg-zinc-100 space-x-8 ">
          <h2 className="text-md font-semibold text-zinc-500">Supported by:</h2>
          <div className="flex flex-row space-x-8 justify-center items-center">
            <Image
              src="/images/ethglobal-logo.png"
              alt="EthGlobal"
              width={175}
              height={100}
              className="h-10 mt-2"
            />
            <Image
              src="/images/worldcoin-logo.png"
              alt="Worldcoin"
              width={100}
              height={100}
              className="mt-4"
            />
          </div>
        </section>

        <motion.div
          className="flex flex-col items-center mt-8 mb-16 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          <h2 className="text-xl font-semibold my-8">
            Sweet opportunities are waiting for you...
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="rounded-lg p-4 shadow-sm hover:bg-gray-100 transition duration-100 ease-in-out cursor-pointer"
              >
                <CardHeader className="flex items-center gap-4 justify-center">
                  <category.icon color="#facc15" size={32} />
                  <CardTitle className="text-md justify-center flex text-center text-zinc-500">
                    {category.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          <h2 className="text-md my-8 italic">...and more to come!</h2>
        </motion.div>
      </main>
    </LayoutGuest>
  );
}
