import { ArrowRightTopIcon } from "pixicons";
import InifiniteBand from "../../components/InifiniteBand";
import Logo from "../../components/Logo";

export default function Hero() {
  return (
    <header className="h-dvh w-full flex flex-col justify-between relative">
      <InifiniteBand
        listOfParagraphs={[
          "Frontend Development: Crafting responsive and engaging user interfaces.",
          "Backend Development: Building robust server-side applications.",
          "UI/UX Design: Creating intuitive and user-friendly experiences.",
          "Cloud Solutions: Leveraging cloud technologies for scalable applications.",
          "SEO Optimization: Enhancing visibility and searchability online.",
          "JavaScript Mastery: Developing dynamic web applications with modern frameworks.",
          "API Integration: Connecting services for seamless data flow.",
          "Cross-Platform Development: Ensuring consistent performance across devices.",
          "Version Control: Collaborating effectively using Git and GitHub.",
          "Performance Optimization: Improving load times and user experience.",
        ]}
      />

      <div className="flex justify-center absolute inset-0">
        <div className="flex flex-col justify-center items-center gap-8 max-md:gap-4 ">
          <div className="flex flex-col items-center">
            <Logo className="w-12 h-12" />
            <h4 className="font-victor-mono text-2xl max-md:text-xl text-black">
              HI, I&apos;m <i className="font-bold">Michell Castillo</i>
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center  special-title">
            <h1>
              Develop the{" "}
              <span className="text-outline text-white">future</span>
              <br />
              with <span className="text-outline text-white">
                code
              </span> and <span className="text-outline text-white">art</span>
            </h1>
          </div>

          {/*
          <p className="font-victor-mono text-black w-1/2 text-center max-lg:w-full">
            I am a passionate{" "}
            <strong>self-taught full stack web developer</strong> with a strong
            commitment to creating effective solutions for businesses. My
            journey in web development has allowed me to tackle diverse
            challenges and deliver results that enhance user experience and
            drive efficiency.
          </p>
          */}

          <div className="flex items-center gap-2">
            <a href="#projects" className="btn !bg-black !text-white">
              See my projects
            </a>

            <a href="#contact" className="btn border-2 border-black">
              Contact me
              <ArrowRightTopIcon className="w-6 h-6 max-md:w-4 max-md:h-4" />
            </a>
          </div>
        </div>
      </div>

      <InifiniteBand
        listOfParagraphs={[
          "React Enthusiast: Crafting dynamic user interfaces with precision and flair.",
          "Angular Architect: Building robust applications with a powerful framework.",
          "MEAN Stack Specialist: Seamlessly integrating MongoDB, Express, Angular, and Node.js.",
          "MERN Stack Wizard: Creating full-stack applications with MongoDB, Express, React, and Node.js.",
          ".NET Developer: Leveraging the power of .NET for scalable backend solutions.",
          "GraphQL Guru: Optimizing data fetching and management for modern applications.",
          "Redis Aficionado: Utilizing in-memory data structures for high-performance caching.",
          "MySQL Maestro: Designing efficient databases for reliable data storage and retrieval.",
          "Full-Stack Innovator: Bridging the gap between frontend and backend technologies.",
          "Tech Savvy Problem Solver: Tackling challenges with a diverse toolkit of technologies.",
        ]}
        containerClass="reverse-marquee"
      />
    </header>
  );
}
