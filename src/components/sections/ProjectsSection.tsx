import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    id: 1,
    seed: "proj1",
    title: "Lawnboy Website Revamp",
    tags: ["UX Research", "Interaction Design"],
    desc: "Partnered with a family-owned small business to modernize their digital presence — crafting a fresh, welcoming site designed to reflect their brand and drive new business.",
  },
  {
    id: 3,
    seed: "proj3",
    title: "Customer UX/UI Portfolio Wesbite",
    tags: ["User Testing", "Information Architecture"],
    desc: "Collaborated closely with a software engineer to bring this portfolio to life — conceptualizing, designing, and iterating entirely in Figma from scratch, then seeing it through to a fully built, deployed website. Every layout, color choice, and interaction was designed with intention to create a seamless and personal experience.",
  },
  {
    id: 2,
    seed: "street",
    title: "Buffalo Wild Wings Mobile App Feature",
    tags: ["Visual Design", "Prototyping"],
    desc: "Orchestrated a game-day marketing initiative for Buffalo Wild Wings as part of a senior capstone project at ASU, developing a mobile app feature concept designed to enhance brand visibility and fan engagement during key sporting events. Conducted user research, built wireframes, and delivered high-fidelity prototypes that translated real fan behaviors into a compelling, intuitive in-app experience.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-[1280px] mx-auto px-12 py-20">
      <h2 className="font-handwritten text-[72px] tracking-[6px] text-black text-center mb-16 leading-none">
        Projects
      </h2>

      <div className="grid grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
