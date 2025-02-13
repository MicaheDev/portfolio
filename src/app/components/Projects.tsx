"use client";
import { projects } from "@/utilities/ProjectsData";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { useScroll } from "motion/react";

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={container}
      className="w-full flex flex-col max-w-screen-2xl m-auto relative "
      id="projects"
    >
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;

        return (
          <ProjectCard
          key={i}
            {...project}
            index={i}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        );
      })}
    </div>
  );
}
