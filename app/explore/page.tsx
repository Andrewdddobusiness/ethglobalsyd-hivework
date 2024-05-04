import Image from "next/image";
import LayoutAuthenticated from "@/components/layouts/layout-authenticated";
import { JobCards } from "@/components/job-cards/job-cards";
import { jobPostingData } from "@/components/job-cards/data";

export default function Explore() {
  return (
    <LayoutAuthenticated>
      <div className="flex flex-col items-center justify-center py-4">
        <div className="h-40 md:w-2/3 rounded-lg">
          <Image
            src="/images/yellow-hex.png"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col md:w-2/3 mt-8">
          <div className="flex flex-row">
            <div className="font-semibold text-2xl">
              Let&apos;s find some sweet honey!
            </div>
            <div className="hidden sm:block max-w-[35px] ml-4">
              <Image
                src="/icons/beehive-happy.png"
                alt="beehive"
                width={100}
                height={100}
                sizes="100vw"
              />
            </div>
          </div>
          <div className="text-md text-zinc-500 mt-2">
            Browse jobs that match your experience to a client&apos;s hiring
            preferences. Ordered by most relevant.
          </div>

          <div className="w-full py-4">
            <JobCards data={jobPostingData} />
          </div>
        </div>
      </div>
    </LayoutAuthenticated>
  );
}
