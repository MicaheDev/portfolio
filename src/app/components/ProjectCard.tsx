"use client";

import { IsPar } from "@/utilities";
import { Project } from "@/utilities/ProjectsData";
import { motion, MotionValue, useTransform } from "motion/react";
import Image from "next/image";
import { ArrowRightTopIcon, GithubIcon, GlobalIcon } from "pixicons";

export default function ProjectCard({
  id,
  name,
  img,
  date,
  description,
  category,
  technologies,
  url,
  githubUrl,
  index,
  range,
  targetScale,
  progress,
}: Project & {
  index: number;
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
}) {

  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className="sticky top-0 h-[600px]">
      <motion.div
        key={id}
        style={{ top: `calc(10% + ${index * 25}px)`, scale }}
        className={`project-card group z-20 relative ${
          IsPar(index + 1) ? "flex-row-reverse" : ""
        } `}
      >
        <div className="w-2/3 flex justify-center items-center max-lg:w-full p-4">
          <Image
            className="w-4/5 h-3/4 max-lg:w-full max-lg:h-full aspect-video rounded-3xl object-cover border-4 border-black"
            width={1280}
            height={720}
            src={img}
            alt={description}
          />
        </div>

        <div
          className={`w-1/3 border-black/50 max-lg:border-none max-lg:w-full flex flex-col max-lg:gap-6 p-8 justify-between ${
            IsPar(index + 1) ? "border-r-2" : "border-l-2"
          }`}
        >
          <div className="w-full flex justify-end items-center ">
            <a
              href={`projects/${id}`}
              target="_blank"
              className="block max-lg:hidden transition-transform duration-300 hover:scale-125"
            >
              <ArrowRightTopIcon className="w-50 h-50" />
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-end">
              <time>{date}</time>
            </div>

            <h2 className="title">{name}</h2>
            <p>{description}</p>

            <div className="flex justify-between items-center w-full">
              <h4 className="font-m42 uppercase text-base font-bold">
                {category}
              </h4>

              <div className="inline-flex gap-2">
                {technologies.map((t) => (
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

          <div className="flex justify-end w-full gap-4">
            <a href={url} target="_blank">
              <GlobalIcon className="w-50 h-50" />
            </a>

            <a href={githubUrl} target="_blank">
              <GithubIcon className="w-50 h-50" />
            </a>

            <a
              href={`projects/${id}`}
              target="_blank"
              className="hidden max-lg:block"
            >
              <ArrowRightTopIcon className="w-50 h-50" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
