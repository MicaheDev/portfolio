import { ArrowRightTopIcon, GithubIcon, GlobalIcon } from "pixicons";
import { projects } from "@/utilities/ProjectsData";
import { IsPar } from "@/utilities";

export default function Projects() {
  return (
    <div className="w-full flex flex-col bg-black" id="projects">
      {projects.map((p, i) => (
        <div
          key={p.id}
          className={`project-card group z-20  ${
            IsPar(i + 1) ? "flex-row-reverse" : ""
          } `}
        >
          <div className="w-2/3 flex justify-center items-center max-lg:w-full p-4">
            <img
              className="w-4/5 h-3/4 max-lg:w-full max-lg:h-full aspect-video rounded-3xl object-cover border-4 border-black"
              src={p.img}
              alt=""
            />
          </div>

          <div
            className={`w-1/3 border-black/50 max-lg:border-none max-lg:w-full flex flex-col max-lg:gap-6 p-8 justify-between ${
              IsPar(i + 1) ? "border-r-2" : "border-l-2"
            }`}
          >
            <div className="w-full flex justify-end items-center ">
              <a
                href={`projects/${p.id}`}
                target="_blank"
                className="block max-lg:hidden group-hover:-rotate-180 transition-transform duration-300 hover:-translate-x-2 hover:translate-y-2 hover:scale-125"
              >
                <ArrowRightTopIcon className="w-50 h-50" />
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-end">
                <time>{p.date}</time>
              </div>

              <h2 className="title">{p.name}</h2>
              <p>{p.description}</p>

              <div className="flex justify-between items-center w-full">
                <h4 className="font-terminal-grotesque uppercase text-3xl font-bold">
                  {p.category}
                </h4>

                <div className="inline-flex gap-2">
                  {p.technologies.map((t) => (
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
              <a href={p.url} target="_blank">
                <GlobalIcon className="w-50 h-50" />
              </a>

              <a href={p.githubUrl} target="_blank">
                <GithubIcon className="w-50 h-50" />
              </a>

              <a
                href={`projects/${p.id}`}
                target="_blank"
                className="hidden max-lg:block"
              >
                <ArrowRightTopIcon className="w-50 h-50" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
