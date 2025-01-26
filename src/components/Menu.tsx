import useSound from "@/hooks/useSound";
import { HomeIcon, MailIcon, ProfileIcon, ProjectsIcon, XIcon } from "pixicons";
import { Dispatch, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

type NavbarLink = {
  path: string;
  label: string;
  icon: React.ReactElement;
};

const iconClass = "w-24 h-24 max-xl:w-14 max-lg:h-14";

export default function Menu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}) {
  const [hoverSoundRef, hoverPlayer] = useSound();
  const [clickSoundRef, clickPlayer] = useSound();

  const links: NavbarLink[] = [
    {
      path: "/",
      label: "Home",
      icon: <HomeIcon className={iconClass} />,
    },
    {
      path: "/about",
      label: "About",
      icon: <ProfileIcon className={iconClass} />,
    },
    {
      path: "/projects",
      label: "Projetcs",
      icon: <ProjectsIcon className={iconClass} />,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: <MailIcon className={iconClass} />,
    },
  ];

  useEffect(() => {
    gsap.from(".links", {
      y: "100%",
      scale: 0,
      opacity: 0,
    });

    gsap.to(".links", {
      y: 0,
      scale: 1,
      opacity: 1,
      stagger: 0.05,
    });
  }, [isOpen]);
  return (
    <>
      <menu
        className={`z-[100] w-full mx-auto border-4 h-dvh overflow-hidden border-black bg-white fixed inset-0 flex justify-center items-center transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <audio ref={hoverSoundRef} src="/sounds/hover.wav" preload="auto" />
        <audio ref={clickSoundRef} src="/sounds/hover-2.wav" preload="auto" />
        <button
          className="absolute top-2 right-2"
          onClick={() => setIsOpen(false)}
        >
          <XIcon className="w-20 h-20" />
        </button>
        <ul className=" flex flex-col w-2/3 gap-8 max-md:gap-2 -rotate-[10deg]">
          {links.map((l) => (
            <li key={l.path}>
              <Link
                className={`flex flex-col links bg-white items-center gap-4 px-8 py-6 border-4 border-black transition-all group ease-in-out duration-300 hover:bg-black hover:text-white relative cursor-pointer ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
                href={l.path}
                onMouseEnter={() => hoverPlayer()}
                onClick={() => clickPlayer(() => setIsOpen(false))}
              >
                {l.icon}
                <span className="text-6xl max-xl:text-4xl text-black font-m42 font-black uppercase group-hover:text-white">
                  {l.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </menu>
    </>
  );
}
