"use client";

import { useEffect, useState } from "react";
import { Project, projects } from "@/utilities/ProjectsData";
import { GithubIcon, GlobalIcon } from "pixicons";
import { useParams } from "next/navigation";

export default function ProjectDetail() {
  const params = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | undefined>();

  useEffect(() => {
    const project = [...projects].find((p) => p.id === params?.id);

    setProject(project);
  }, [params?.id]);

  if (!project) {

    return <>No econtrado</>;
  }

  return (
    <div className="w-full p-8 flex flex-col gap-8">
      <div className="w-full flex justify-center items-center max-lg:w-full h-full">
        <img
          className="w-full h-3/4 max-lg:w-full max-lg:h-full aspect-video rounded-3xl object-cover border-4 border-black"
          src={project.img}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="inline-flex w-full gap-4">
            <a href={project.url} target="_blank">
              <GlobalIcon className="w-50 h-50" />
            </a>

            <a href={project.githubUrl} target="_blank">
              <GithubIcon className="w-50 h-50" />
            </a>
          </div>
          <div className="text-nowrap">
            <time>{project.date}</time>
          </div>
        </div>
        <h2 className="font-m42 uppercase text-8xl font-black max-md:text-4xl">
          {project.name}
        </h2>

        <p>{project.description}</p>

        <div className="flex justify-between items-center w-full">
          <h4 className="font-m42 uppercase text-3xl font-bold">
            {project.category}
          </h4>

          <div className="inline-flex gap-2">
            {project.technologies.map((t) => (
              <span
                className="px-4 py-2 bg-black text-white rounded-full"
                key={t}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}
