export type Project = {
  title: string;
  date: Date;
  category: string[];
  desc: string;
  slug: string;
  preview: {
    url: string;
    alt: string;
  };
  projectUrl?: string | null
  technologies?: string[]; 
};

export type Projects = Project[];

export type ProjectDetails = Project & {
  image?: {
    url: string;
    alt: string;
  } | null;
  image2?: {
    url: string;
    alt: string;
  } | null;
  detail?: string ; 
  problem: string,
  solution: string,
  impact: string
};
