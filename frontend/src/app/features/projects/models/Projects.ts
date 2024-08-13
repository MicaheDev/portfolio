export type Project = {
  title: string;
  date: Date;
  category: string[];
  desc: string;
  slug: string;
  preview: string;
  color: string;
  projectUrl?: string | null
};

export type Projects = Project[];

export type ProjectDetails = Project & {
  image?: string | null;
  image2?: string | null ;
  detail?: string ; 
  technologies?: string[]; 
};
