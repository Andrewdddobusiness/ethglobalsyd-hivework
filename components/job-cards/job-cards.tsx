"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import { TJobPosting } from "./data";

interface JobCardsProps {
  data: TJobPosting[];
}

export const JobCards: React.FC<JobCardsProps> = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    setIsLiked((prev) => !prev);
  };

  const jobCards = data?.map((job, index) => (
    <Card key={index} className="border rounded-lg shadow-lg p-6 mx-auto my-4">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          <div className="text-xs text-zinc-500">{job.posted}</div>
          <div className="flex flex-row justify-between mt-2">
            <div>{job.title}</div>
            <div
              className="flex justify-end cursor-pointer"
              onClick={handleHeartClick}
            >
              {isLiked ? <FaHeart /> : <FaRegHeart />}
            </div>
          </div>
          <div>
            <Badge className="text-xs">{job.billed}</Badge>
            <Badge className="text-xs ml-2">{job.skillLevel}</Badge>
          </div>
        </CardTitle>
        <CardDescription>
          <div className="mt-4">{job.description}</div>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-row mt-4 justify-between">
        <div className="space-x-2">
          {job.skillsRequired.map((skill, skillIndex) => (
            <Badge
              key={skillIndex}
              className="text-sm text-zinc-500 bg-zinc-100"
            >
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex justify-end">
          <Button>Apply</Button>
        </div>
      </CardContent>
    </Card>
  ));

  return <>{jobCards}</>;
};
