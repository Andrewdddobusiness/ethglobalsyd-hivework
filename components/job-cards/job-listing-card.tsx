import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface JobListingCardProps {
  title: string;
  category: string;
  duration: string;
  level: string;
  description: string;
  skills: string[];
  budget: number;
}

const JobListingCard: React.FC<JobListingCardProps> = ({
  title,
  category,
  duration,
  level,
  description,
  skills,
  budget,
}) => (
  <Card
    className={`rounded-lg p-4 transition-shadow duration-200 
    hover:shadow-lg`}
  >
    <CardHeader>
      <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      <CardDescription className="text-gray-600">{category}</CardDescription>
    </CardHeader>
    <CardContent className="text-sm text-gray-600">
      <div className="space-x-2 ">
        <Badge className="bg-yellow-400 text-black">{duration}</Badge>
        <Badge className="bg-yellow-400 text-black">{level}</Badge>
      </div>

      <div className="mt-4 text-md text-zinc-500">{description}</div>

      <div className="mt-4 space-x-2">
        {skills.map((skill, index) => (
          <Badge key={index}>{skill}</Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter>
      <p>Budget: ${budget}/hr</p>
    </CardFooter>
  </Card>
);

export default JobListingCard;
