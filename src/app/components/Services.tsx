import { ReactNode } from "react";
import { IsPar } from "@/utilities";

type Service = {
  title: string | ReactNode;
  description: ReactNode;
  status: string;
};

export default function Services() {
  const services: Service[] = [
    {
      title: `Web Developement`,
      description: (
        <>
          I am a <strong>full stack web developer</strong> with expertise in{" "}
          <strong>React</strong>, <strong>Angular</strong>,{" "}
          <strong>Express</strong>, <strong>.NET</strong>,{" "}
          <strong>MongoDB</strong>, <strong>MySQL</strong>, and{" "}
          <strong>PostgreSQL</strong>. I create <i>innovative solutions</i> that
          enhance user experience and improve efficiency.
        </>
      ),
      status: `+ 2 Years of exp`,
    },


    {
      title: `Game Developement`,
      description: (
        <>
          Learning <strong>game development</strong> has actually become my{" "}
          <i>true passion</i> and the reason I started{" "}
          <strong>programming</strong>. I&apos;m exploring the fundamental
          concepts using <strong>Godot</strong> and <strong>.NET</strong>.
          Excited to bring my ideas to life!
        </>
      ),
      status: `learning`,
    },


    {
      title: (
        <>
          UI <span className="text-white text-outline">&&</span> UX Design
        </>
      ),
      description: (
        <>
          I know the fundamentals of <strong>UI/UX design</strong> and love to
          experiment with <i>wild ideas</i> and <i>unique designs</i>.
        </>
      ),
      status: `+ 2 Years of exp`,
    },

    {
      title: `Artist`,
      description: (
        <>
          As a hobby, I experiment with <strong>Blender</strong>,{" "}
          <i>pixel art illustrations</i>, and other artistic creations like{" "}
          <strong>icons</strong>.
        </>
      ),
      status: `hobby`,
    },
  ];
  return (
    <div className="min-h-dvh w-full flex justify-center items-center max-lg:h-auto p-4 max-lg:py-8 max-md:min-h-auto">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 max-lg:gap-8 max-lg:grid-cols-1 max-lg:grid-rows-4 w-3/4 max-xl:w-full">
        {/* Cards*/}

        {services.map((service, i) => (
          <div
            key={i}
            className={`
          min-w-[400px] max-lg:w-full max-md:min-w-[200px] group outline outline-4
          ${
            !IsPar(i + 1)
              ? "bg-indigo-400 outline-indigo-400"
              : "bg-black outline-black"
          }
          `}
          >
            <div
              className={`service-card outline outline-4 z-10 hover:z-20 ${
                !IsPar(i + 1)
                  ? "bg-black text-white outline-black hover:outline-indigo-500"
                  : "bg-white text-black outline-black"
              }`}
            >
              <h2 className="title">{service.title}</h2>
              <p>{service.description}</p>

              <div className="flex justify-between">
                <h4 className="uppercase font-m42 text-base max-lg:text-xl">
                  {service.status}
                </h4>

                <h4
                  className={`special-title ${
                    !IsPar(i + 1) && "group-hover:text-indigo-400"
                  } transition-colors duration-200`}
                >
                  {i + 1}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
