export type Certification = {
    title: string;
    category: string[];
    desc: string;
    slug: string;
    preview: {
      url: string;
      alt: string;
    };
    certificationtUrl?: string | null
  };
  
  export type Certifications = Certification[];
 
  