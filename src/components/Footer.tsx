import { ArrowRightTopIcon } from "pixicons";
import Logo from "./Logo";

type FooterLinks = {
  path: string;
  label: string;
};

type SocialMediaLinks = {
  url: string;
  label: string;
};

export default function Footer() {
  const navigationLinks: FooterLinks[] = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/projects",
      label: "Projetcs",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];

  const socialMedia: SocialMediaLinks[] = [
    {
      url: "/",
      label: "Linkedin",
    },
    {
      url: "/",
      label: "Github",
    },

    {
      url: "/",
      label: "Dribble",
    },
  ];
  return (
    <footer className="min-h-dvh h-auto w-full border-t-4 bg-black !text-white border-black flex flex-col justify-between items-center p-8 max-md:py-8 gap-8 relative overflow-hidden">
      <div className="w-full flex items-start max-md:items-center justify-between max-lg:flex-col gap-4">
        <div className="inline-flex gap-2 items-center">
          <Logo className="w-15 h-15 max-lg:w-10 max-lg:h-10" />
          <h2 className="font-m42 uppercase font-black">MicaheDev</h2>
        </div>
        <p className="text-right w-1/2 font-bold max-lg:text-center max-lg:w-3/4 max-md:w-full">
          All work © MicaheDev 2022-2025. All rights reserved. MicaheDev,
          Developer based in Venezuela. Thanks to Mr_QualityZ for the song used
          on the website: &quot;Lost in 8-bit&quot;.
        </p>
      </div>

      <div className="flex w-full gap-8 max-lg:flex-col">
        <div className="flex gap-8 font-black max-md:justify-center">
          <div className="flex flex-col gap-2 font-m42 border-r-2 border-black/50 px-4 max-md:p-0">
            {navigationLinks.map((l) => (
              <a key={l.label} href={l.path} className="inline-flex text-2xl max-md:text-2xl gap-2 uppercase">
                {l.label} <ArrowRightTopIcon className="w-10 h-10" />
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 font-m42 border-r-2 border-black/50 px-4 max-md:p-0">
            {socialMedia.map((s) => (
              <a key={s.label} href={s.url} className="inline-flex text-2xl max-md:text-2xl gap-2 uppercase">
                {s.label} <ArrowRightTopIcon className="w-10 h-10" />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full h-full">
          <img
            src="/footer.png"
            className="w-[100%] h-[300px] object-cover border-4 rounded-2xl border-white"
            alt=""
          />
        </div>
      </div>
     
      <h2 className="text-8xl max-xl:text-[200px] max-md:text-6xl font-m42 font-black uppercase leading-[200px]">
        MicaheDev
      </h2>
    </footer>
  );
}
