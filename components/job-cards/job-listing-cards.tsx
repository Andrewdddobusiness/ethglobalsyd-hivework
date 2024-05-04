import React from "react";
import JobCard from "./job-listing-card";
import Link from "next/link";

const JobListingCards = ({ jobListings }: any) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    <Link
      href="/work/create/new-job"
      className="border-2 border-dashed border-gray-400 rounded-lg flex justify-center items-center p-6 cursor-pointer hover:border-gray-600 transition duration-200"
    >
      <span className="text-gray-600 text-lg">Create a job</span>
    </Link>

    {jobListings.map((job: any, index: any) => (
      <JobCard key={index} {...job} />
    ))}
  </div>
);

export default JobListingCards;
