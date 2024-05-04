export type TJobPosting = {
  posted: string;
  title: string;
  billed: string;
  skillLevel: string;
  description: string;
  skillsRequired: string[];
};

export const jobPostingData: TJobPosting[] = [
  {
    posted: "Posted yesterday",
    title:
      "Travel Planner with customer service skills and an entrepreneurial mindset",
    billed: "Hourly",
    skillLevel: "Entry level",
    description:
      "Ignite your wanderlust by becoming an Online Remote Travel Advisor on our team! Seize the opportunity to start a rewarding career in the travel industry with all the guidance, training, and certifications required to be successful.",
    skillsRequired: ["Customer Development", "Time Management"],
  },
  {
    posted: "Posted 2 days ago",
    title: "Freelance Graphic Designer with Branding Experience",
    billed: "Per project",
    skillLevel: "Mid-level",
    description:
      "Join our creative team as a Freelance Graphic Designer. We are looking for someone with a keen eye for design, branding experience, and proficiency in Adobe Creative Suite. Your role will involve creating marketing materials, logo design, and brand identity development.",
    skillsRequired: ["Adobe Creative Suite", "Branding", "Creativity"],
  },
  {
    posted: "Posted 3 days ago",
    title: "Freelance Content Writer with SEO Knowledge",
    billed: "Per article",
    skillLevel: "Entry level",
    description:
      "We're seeking a Freelance Content Writer to create engaging blog posts and website content. The ideal candidate will have a basic understanding of SEO, strong research skills, and a knack for storytelling. Experience with WordPress is a plus.",
    skillsRequired: ["SEO", "Content Writing", "Research"],
  },
  {
    posted: "Posted 1 week ago",
    title: "Freelance Software Engineer for Web Development",
    billed: "Per project",
    skillLevel: "Mid-level",
    description:
      "We need a Freelance Software Engineer with a focus on web development. The role requires experience with React, Node.js, and RESTful APIs. You'll work on building and maintaining web applications for various clients.",
    skillsRequired: ["React", "Node.js", "RESTful APIs"],
  },
  {
    posted: "Posted 5 days ago",
    title: "Freelance Social Media Manager",
    billed: "Hourly",
    skillLevel: "Entry level",
    description:
      "We are looking for a Freelance Social Media Manager to handle content creation, scheduling, and engagement on various social media platforms. The ideal candidate has a good understanding of social media trends and analytics.",
    skillsRequired: [
      "Social Media Management",
      "Content Creation",
      "Analytics",
    ],
  },
];
