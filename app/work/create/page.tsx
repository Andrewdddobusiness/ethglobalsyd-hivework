"use client";
import Image from "next/image";
import LayoutAuthenticated from "@/components/layouts/layout-authenticated";
import JobListingCards from "@/components/job-cards/job-listing-cards";
import { jobListingsData } from "@/components/job-cards/data";

export default function Create() {
  return (
    <LayoutAuthenticated>
      <div className="flex flex-col items-center justify-center py-4">
        <div className=" md:w-2/3">
          <div className="h-40 placeholder:rounded-lg">
            <Image
              src="/images/dark-hexx.png"
              alt="Image"
              width="1920"
              height="1080"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>

          <h1 className="text-4xl font-semibold mt-8">Your work</h1>
          <div className="text-md text-zinc-500 mt-2">
            Manage your jobs and contracts efficiently: those needing urgent
            action and with time sensitivity are displayed first.
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Your job listings</h2>
          </div>

          <div>
            <JobListingCards jobListings={jobListingsData} />
          </div>
        </div>
      </div>
    </LayoutAuthenticated>
  );
}
