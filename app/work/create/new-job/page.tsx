"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import LayoutAuthenticated from "@/components/layouts/layout-authenticated";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { Textarea } from "@/components/ui/textarea";

import {
  IDKitWidget,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/idkit";

import handleVerifyExecute from "@/actions/verify-execute";

// Define a type for Combobox items
interface ComboboxItem {
  value: string;
  label: string;
}

const createCombobox = (
  items: ComboboxItem[],
  currentValue: string,
  onChange: (value: string) => void,
  placeholder: string
) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={Boolean(currentValue)}
        className="w-full justify-between"
      >
        {currentValue
          ? items.find((item) => item.value === currentValue)?.label ||
            currentValue
          : placeholder}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="p-0 w-full">
      <Command>
        <CommandInput placeholder={`Search ${placeholder.toLowerCase()}...`} />
        <CommandList>
          <CommandGroup>
            {items.map((item, index) => (
              <CommandItem
                key={index}
                value={item.value}
                onSelect={() => onChange(item.value)}
              >
                <Check
                  className={`mr-2 h-4 w-4 ${
                    currentValue === item.value ? "opacity-100" : "opacity-0"
                  }`}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
      </Command>
    </PopoverContent>
  </Popover>
);

export default function CreateJobListing() {
  const [jobName, setJobName] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>("");
  const [jobCategory, setJobCategory] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);
  const [skillLevel, setSkillLevel] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [currency, setCurrency] = useState<string>("");
  const [budget, setBudget] = useState<number | "">("");

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const onSuccess = useCallback(() => {
    // window.location.href = "/explore";
  }, []);

  const onSuccess2 = (result: ISuccessResult) => {
    // This is where you should perform frontend actions once a user has been verified
    window.alert(
      `Successfully verified with World ID!
      Your nullifier hash is: ` + result.nullifier_hash
    );
  };

  const jobCategories: ComboboxItem[] = [
    { value: "development", label: "Development" },
    { value: "data-science", label: "Data Science" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
  ];

  const skillLevels: ComboboxItem[] = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "difficult", label: "Difficult" },
  ];

  const durations: ComboboxItem[] = [
    { value: "few-days", label: "A few days" },
    { value: "few-weeks", label: "A few weeks" },
    { value: "few-months", label: "A few months" },
    { value: "year-or-more", label: "More than a year" },
  ];

  const currencies: ComboboxItem[] = [
    { value: "AUD", label: "AUD" },
    { value: "USD", label: "USD" },
    { value: "WLD", label: "WLD" },
  ];

  const handleSubmit = () => {
    console.log({
      jobName,
      jobDescription,
      jobCategory,
      skills,
      skillLevel,
      duration,
      budget,
    });
  };

  return (
    <LayoutAuthenticated>
      <div className="flex flex-col items-center py-8 ">
        <div className="bg-white rounded-lg shadow-sm w-3/4 flex flex-col items-center">
          <div className="h-48 w-full">
            <Image
              src="/images/new-jobs-freelancer.jpg"
              alt="Job creation"
              width="1920"
              height="1080"
              className="h-full w-full object-cover rounded-t-lg"
            />
          </div>

          <div className="p-6 w-2/3 flex flex-col">
            <h1 className="text-4xl font-semibold mt-8 mb-8">
              Create a New Job Listing
            </h1>

            <div className="flex flex-col gap-4 ">
              {/* Job name */}
              <div>
                <label className="text-md text-zinc-500">Job Name</label>
                <Input
                  placeholder="Enter job name"
                  value={jobName}
                  onChange={(e) => setJobName(e.target.value)}
                  className="w-full "
                />
              </div>

              {/* Job description */}
              <div>
                <label className="text-md text-zinc-500">Job Description</label>
                <Textarea
                  placeholder="Describe the job"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Job category Combobox */}
              <div>
                <label className="text-md text-zinc-500">Job Category</label>
                {createCombobox(
                  jobCategories,
                  jobCategory,
                  setJobCategory,
                  "Select a category"
                )}
              </div>

              {/* Skill level Combobox */}
              <div>
                <label className="text-md text-zinc-500">Skill Level</label>
                {createCombobox(
                  skillLevels,
                  skillLevel,
                  setSkillLevel,
                  "Select a skill level"
                )}
              </div>

              {/* Duration Combobox */}
              <div>
                <label className="text-md text-zinc-500">Duration</label>
                {createCombobox(
                  durations,
                  duration,
                  setDuration,
                  "Select duration"
                )}
              </div>

              {/* Skills */}
              <div>
                <label className="text-md text-zinc-500">Skills Needed</label>
                <Input
                  placeholder="Enter required skills (comma-separated)"
                  value={skills.join(", ")}
                  onChange={(e) => {
                    const skillsArray = e.target.value
                      .split(",")
                      .map((skill) => skill.trim());
                    setSkills(skillsArray);
                  }}
                  className="w-full"
                />
              </div>

              {/* Currency Combobox */}
              <div>
                <label className="text-md text-zinc-500">Currency</label>
                {createCombobox(
                  currencies,
                  currency,
                  setCurrency,
                  "Select currency"
                )}
              </div>

              {/* Budget */}
              <div>
                <label className="text-md text-zinc-500">Budget</label>
                <Input
                  type="number"
                  className="w-full"
                  placeholder="Enter budget"
                  value={budget}
                  onChange={(e) =>
                    setBudget(e.target.value ? parseInt(e.target.value) : "")
                  }
                />
              </div>
            </div>

            {/* Submit and Back buttons */}
            <div className="flex justify-between mt-8">
              <Link
                href="/work/create"
                className="border border-gray-400 px-4 py-2 hover:bg-gray-100 transition rounded-full"
              >
                Back
              </Link>

              <IDKitWidget
                app_id={`app_${process.env.NEXT_PUBLIC_APP_ID}`}
                action={process.env.NEXT_PUBLIC_ACTION_ID || ""}
                onSuccess={onSuccess2}
                handleVerify={handleVerifyExecute}
                verification_level={VerificationLevel.Device}
              >
                {({ open }: any) => (
                  <Button
                    onClick={open}
                    className="bg-yellow-400 text-black rounded-full hover:bg-yellow-300"
                  >
                    Post Job
                  </Button>
                )}
              </IDKitWidget>
            </div>
          </div>
        </div>
      </div>
    </LayoutAuthenticated>
  );
}
