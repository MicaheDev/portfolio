import Services from "@/app/components/Services";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Services/>
      <Projects />
      <Contact />
    </main>
  );
}
