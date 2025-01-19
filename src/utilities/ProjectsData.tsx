export type Project = {
  id: string;
  img: string;
  name: string;
  description: string;
  date: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  url: string;
  path: string;
};

export const projects: Project[] = [
  {
    id: "1",
    img: "/projects/01.png",
    name: "Merme Tasker",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..",
    date: "2024-10-11",
    category: "UI Design",
    technologies: ["Figma"],
    githubUrl: "",
    url: "",
    path: "",
  },

  {
    id: "2",
    img: "/projects/02.png",
    name: "Flappy Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..",
    date: "2024-10-11",
    category: "Game",
    technologies: ["Godot", ".NET"],
    githubUrl: "",
    url: "",
    path: "",
  },

  {
    id: "3",
    img: "/projects/03.png",
    name: "Ez Jpn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..",
    date: "2024-10-11",
    category: "UI Design",
    technologies: ["Figma"],
    githubUrl: "",
    url: "",
    path: "",
  },
];
